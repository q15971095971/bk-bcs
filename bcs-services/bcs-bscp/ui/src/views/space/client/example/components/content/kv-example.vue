<template>
  <section class="kv-example-template">
    <form-option ref="fileOptionRef" :directory-show="false" @update-option-data="getOptionData" />
    <div class="preview-container">
      <div class="kv-handle-content">
        <span class="preview-label">{{ $t('示例预览') }}</span>
        <div class="change-method">
          <div
            :class="['tab-wrap', { 'is-active': activeTab === index }]"
            v-for="(item, index) in tabArr"
            :key="item.name"
            @click="handleTab(index)">
            {{ item.name }}
          </div>
        </div>
        <bk-button theme="primary" class="copy-btn" @click="copyExample">{{ $t('复制示例') }}</bk-button>
        <bk-alert class="alert-tips-wrap" v-show="topTipShow" theme="info">
          <div class="alert-tips">
            <p>{{ topTip }}</p>
            <close-line class="close-line" @click="topTipShow = false" />
          </div>
        </bk-alert>
      </div>
      <code-preview
        class="preview-component"
        ref="codePreviewRef"
        :code-val="replaceVal"
        :variables="variables"
        @change="(val: string) => (copyReplaceVal = val)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, provide, computed, onMounted, watch, Ref, inject, nextTick } from 'vue';
  import { copyToClipBoard } from '../../../../../../utils/index';
  import { CloseLine } from 'bkui-vue/lib/icon';
  import { IVariableEditParams } from '../../../../../../../types/variable';
  import BkMessage from 'bkui-vue/lib/message';
  import FormOption from '../form-option.vue';
  import codePreview from '../code-preview.vue';
  import { useI18n } from 'vue-i18n';
  import { useRoute } from 'vue-router';

  const props = defineProps<{
    kvName: string;
  }>();

  const { t } = useI18n();
  const route = useRoute();
  const tabArr = [
    {
      name: t('Get方法'),
      topTip: t('Get方法：用于一次性拉取最新的配置信息，适用于需要获取并更新配置的场景。'),
    },
    {
      name: t('Watch方法'),
      topTip: t(
        'Watch方法：通过建立长连接，实时监听配置版本的变更，当新版本的配置发布时，将自动调用回调方法处理新的配置信息，适用于需要实时响应配置变更的场景。',
      ),
    },
  ];

  const codePreviewRef = ref();
  const fileOptionRef = ref();
  const bkBizId = ref(String(route.params.spaceId));
  const codeVal = ref(''); // 存储yaml字符原始值
  const replaceVal = ref(''); // 替换后的值
  const copyReplaceVal = ref(''); // 渲染的值，用于复制未脱敏密钥的yaml数据
  const variables = ref<IVariableEditParams[]>();
  const activeTab = ref(0); // 激活tab索引
  const topTipShow = ref(true);
  // fileOption组件传递过来的数据汇总
  const optionData = ref({
    clientKey: '',
    privacyCredential: '',
    labelArr: [],
    labelArrType: '', // 展示格式
  });
  const serviceName = inject<Ref<string>>('serviceName');
  const formError = ref<number>();
  provide('formError', formError);

  // 代码预览上方提示框
  const topTip = computed(() => {
    return tabArr[activeTab.value].topTip;
  });

  watch(
    () => props.kvName,
    (newV) => {
      if (newV !== 'kv-cmd') {
        handleTab();
        getOptionData(optionData.value); // 每次切换模板需重新展示数据方式
      }
    },
  );

  onMounted(() => {
    handleTab();
  });

  const getOptionData = (data: any) => {
    // labels展示方式加工，并替换数据
    let labelArrType = '';
    switch (props.kvName) {
      case 'java':
        if (data.labelArr.length) {
          labelArrType = data.labelArr
            .map((item: string) => {
              const [key, value] = item.split(':');
              return `labels.put(${key}, ${value});`;
            })
            .join('');
        }
        optionData.value = {
          ...data,
          labelArrType,
        };
        break;
      case 'c++':
        if (data.labelArr.length) {
          labelArrType = data.labelArr
            .map((item: string, index: number) => {
              console.log(item);
              const [key, value] = item.split(':');
              return `{${key}, ${value}}${index + 1 === data.labelArr.length ? '' : ', '}`;
            })
            .join('');
        }
        optionData.value = {
          ...data,
          labelArrType: `{${labelArrType}}`,
        };
        break;
      default:
        labelArrType = data.labelArr.length ? data.labelArr.join(', ') : '';
        optionData.value = {
          ...data,
          labelArrType: `{${labelArrType}}`,
        };
        break;
    }
    updateVariables(); // 表单数据更新，配置需要同时更新
    replaceVal.value = codeVal.value; // 数据重置
    nextTick(() => {
      // 等待monaco渲染完成(高亮)再改固定值
      updateReplaceVal();
    });
  };
  const updateReplaceVal = () => {
    let updateString = replaceVal.value;
    updateString = updateString.replace('{{ .Bk_Bscp_Variable_BkBizId }}', bkBizId.value);
    updateString = updateString.replace('{{ .Bk_Bscp_Variable_ServiceName }}', serviceName!.value);
    replaceVal.value = updateString.replaceAll('{{ .Bk_Bscp_Variable_FEED_ADDR }}', (window as any).FEED_ADDR);
  };
  const updateVariables = () => {
    variables.value = [
      {
        name: 'Bk_Bscp_Variable_Leabels',
        type: '',
        default_val: optionData.value.labelArrType,
        memo: '',
      },
      {
        name: 'Bk_Bscp_Variable_ClientKey',
        type: '',
        default_val: `"${optionData.value.privacyCredential}"`,
        memo: '',
      },
    ];
  };

  // 复制示例
  const copyExample = async () => {
    try {
      await fileOptionRef.value.formRef.validate();
      // 复制示例使用未脱敏的密钥
      const reg = /"(.{1}|.{3})\*{3}(.{1}|.{3})"/g;
      const copyVal = copyReplaceVal.value.replaceAll(reg, `"${optionData.value.clientKey}"`);
      copyToClipBoard(copyVal);
      BkMessage({
        theme: 'success',
        message: t('示例已复制'),
      });
    } catch (error) {
      // 通知密钥选择组件校验状态
      formError.value = new Date().getTime();
      console.log(error);
    }
  };
  // 切换tab
  const handleTab = async (index = 0) => {
    codePreviewRef.value.scrollTo();
    activeTab.value = index;
    const newKvData = await changeKvData(props.kvName, index);
    codeVal.value = newKvData.default;
    replaceVal.value = newKvData.default;
    updateReplaceVal();
  };
  // 键值型数据模板切换
  /**
   *
   * @param kvName 数据模板名称
   * @param methods 方法，0: get，1: watch
   */
  const changeKvData = (kvName = 'python', methods = 0) => {
    switch (kvName) {
      case 'python':
        return !methods
          ? import('/src/assets/exampleData/kv-python-get.yaml?raw')
          : import('/src/assets/exampleData/kv-python-watch.yaml?raw');
      case 'go':
        return !methods
          ? import('/src/assets/exampleData/kv-go-get.yaml?raw')
          : import('/src/assets/exampleData/kv-go-watch.yaml?raw');
      case 'java':
        return !methods
          ? import('/src/assets/exampleData/kv-java-get.yaml?raw')
          : import('/src/assets/exampleData/kv-java-watch.yaml?raw');
      case 'c++':
        return !methods
          ? import('/src/assets/exampleData/kv-c++-get.yaml?raw')
          : import('/src/assets/exampleData/kv-c++-watch.yaml?raw');
      default:
        return '';
    }
  };
</script>

<style scoped lang="scss">
  .kv-example-template {
    display: flex;
    flex-direction: column;
    height: 100%;
    .change-method {
      margin: 0 16px;
      padding: 4px;
      display: inline-flex;
      background: #f0f1f5;
      border-radius: 2px;
    }
    .tab-wrap {
      padding: 0 12px;
      min-width: 72px;
      line-height: 24px;
      font-size: 12px;
      text-align: center;
      color: #63656e;
      cursor: pointer;
      transition: 0.3s;
      &.is-active {
        color: #3a84ff;
        background-color: #fff;
      }
    }
  }
  .preview-container {
    margin-top: 32px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    border-top: 1px solid #dcdee5;
    // overflow: hidden;
  }
  .kv-handle-content {
    flex-shrink: 0;
  }
  .preview-component {
    margin-top: 8px;
    padding: 16px 0;
    flex: 1;
    height: 100%;
    background-color: #f5f7fa;
  }
  .alert-tips-wrap {
    margin-top: 8px;
    .close-line {
      margin-left: auto;
      cursor: pointer;
    }
  }
  .alert-tips {
    display: flex;
    > p {
      margin: 0;
      line-height: 20px;
    }
  }
</style>
