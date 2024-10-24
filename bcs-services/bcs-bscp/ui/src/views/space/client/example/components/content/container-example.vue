<template>
  <section class="example-wrap">
    <form-option ref="fileOptionRef" @update-option-data="getOptionData" />
    <div class="preview-container">
      <span class="preview-label">{{ $t('示例预览') }}</span>
      <bk-button theme="primary" class="copy-btn" @click="copyExample">{{ $t('复制示例') }}</bk-button>
      <code-preview
        class="preview-component"
        :code-val="replaceVal"
        :variables="variables"
        @change="(val: string) => (copyReplaceVal = val)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, inject, Ref, provide, nextTick } from 'vue';
  import { copyToClipBoard } from '../../../../../../utils/index';
  import { IVariableEditParams } from '../../../../../../../types/variable';
  import BkMessage from 'bkui-vue/lib/message';
  import FormOption from '../form-option.vue';
  import CodePreview from '../code-preview.vue';
  import { useI18n } from 'vue-i18n';
  import { useRoute } from 'vue-router';
  import yamlString from '/src/assets/exampleData/file-container.yaml?raw';

  const { t } = useI18n();
  const route = useRoute();

  const fileOptionRef = ref();
  // fileOption组件传递过来的数据汇总
  const optionData = ref({
    clientKey: '',
    privacyCredential: '',
    labelArr: [],
    tempDir: '',
  });
  const bkBizId = ref(String(route.params.spaceId));
  const replaceVal = ref('');
  const copyReplaceVal = ref(''); // 渲染的值，用于复制未脱敏密钥的yaml数据
  const serviceName = inject<Ref<string>>('serviceName');
  const variables = ref<IVariableEditParams[]>();
  const formError = ref<number>();
  provide('formError', formError);

  const getOptionData = (data: any) => {
    // 标签展示方式加工
    const labelArr = data.labelArr.length ? data.labelArr.join(', ') : '';
    optionData.value = {
      ...data,
      labelArr,
    };
    replaceVal.value = yamlString; // 获取/重置传递的数据
    updateVariables(); // 表单数据更新，配置需要同时更新
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
        default_val: `'{${optionData.value.labelArr}}'`,
        memo: '',
      },
      {
        name: 'Bk_Bscp_Variable_ClientKey',
        type: '',
        default_val: `'${optionData.value.privacyCredential}'`,
        memo: '',
      },
      {
        name: 'Bk_Bscp_VariableTempDir',
        type: '',
        default_val: `'${optionData.value.tempDir}'`,
        memo: '',
      },
    ];
  };
  // 复制示例
  const copyExample = async () => {
    try {
      await fileOptionRef.value.formRef.validate();
      // 复制示例使用未脱敏的密钥
      const reg = /'(.{1}|.{3})\*{3}(.{1}|.{3})'/g;
      const copyVal = copyReplaceVal.value.replaceAll(reg, `'${optionData.value.clientKey}'`);
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
</script>

<style scoped lang="scss">
  .example-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    .preview-component {
      margin-top: 16px;
      padding: 16px 0 0;
      height: calc(100% - 48px);
      background-color: #f5f7fa;
    }
  }
  .preview-container {
    margin-top: 32px;
    padding: 8px 0;
    flex: 1;
    border-top: 1px solid #dcdee5;
    overflow: hidden;
  }

  .preview-label {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 22px;
    color: #63656e;
  }
  .copy-btn {
    margin-left: 16px;
  }
</style>
