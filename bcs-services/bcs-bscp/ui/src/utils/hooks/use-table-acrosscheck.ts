import { h, Ref, ref } from 'vue';
import AcrossCheck from '../../components/across-check.vue';
import TableTip from '../../components/across-check-table-tip.vue';
import CheckType from '../../../types/across-checked';

export interface IAcrossCheckConfig {
  dataCount: Ref<number>; // 可选的数据总数，不含禁用状态
  curPageData: Ref<any[]>; // 当前页数据
  rowKey?: string[]; // 每行数据唯一标识
  arrowShow?: Ref<boolean>; // 是否提供全选/跨页全选功能
}
// 表格跨页全选功能
export default function useTableAcrossCheck({
  dataCount,
  curPageData,
  rowKey = ['name', 'id'],
  arrowShow,
}: IAcrossCheckConfig) {
  const selectType = ref(CheckType.Uncheck);
  const selections = ref<any[]>([]);
  const renderSelection = () => {
    // 渲染表头
    return h(AcrossCheck, {
      value: selectType.value,
      disabled: !dataCount.value,
      arrowShow: arrowShow?.value,
      onChange: handleSelectTypeChange,
    });
  };
  const renderTableTip = () => {
    // 表格中间数据提示
    return h(TableTip, {
      dataLength: dataCount.value,
      selectionsLength: selections.value.length,
      selectType: selectType.value,
      arrowShow: arrowShow?.value,
      handleClearSelection,
      handleSelectTypeChange,
    });
  };
  // 表头全选事件
  const handleSelectTypeChange = (value: number) => {
    switch (value) {
      case CheckType.Uncheck:
        handleClearSelection();
        break;
      case CheckType.Checked:
        handleSelectCurrentPage();
        break;
      case CheckType.AcrossChecked:
        handleSelectionAll();
        break;
    }
  };
  // 当前页全选
  const handleSelectCurrentPage = () => {
    selectType.value = CheckType.Checked;
    selections.value = [...curPageData.value];
  };
  // 跨页全选
  const handleSelectionAll = () => {
    selectType.value = CheckType.AcrossChecked;
    selections.value = [];
  };
  // 清空全选
  const handleClearSelection = () => {
    selectType.value = CheckType.Uncheck;
    selections.value = [];
  };
  // 表格行勾选后重置状态
  const handleSetSelectType = () => {
    if (selections.value.length === 0 && selectType.value !== CheckType.Uncheck) {
      // 取消全选状态
      selectType.value = CheckType.Uncheck;
      console.log('123');
    } else if (
      selections.value.length < curPageData.value.length &&
      [CheckType.Checked, CheckType.Uncheck].includes(selectType.value)
    ) {
      // 从当前页全选/空数据 -> 当前页半选
      selectType.value = CheckType.HalfChecked;
    } else if (
      selections.value.length === curPageData.value.length &&
      ![CheckType.HalfAcrossChecked, CheckType.AcrossChecked].includes(selectType.value)
    ) {
      // 当前页全选
      selectType.value = CheckType.Checked;
    } else if (selections.value.length < dataCount.value && selectType.value === CheckType.AcrossChecked) {
      // 跨页半选
      selectType.value = CheckType.HalfAcrossChecked;
    } else if (!selections.value.length && [CheckType.HalfAcrossChecked].includes(selectType.value)) {
      // 跨页全选
      selectType.value = CheckType.AcrossChecked;
    }
  };
  // 当前行选中事件
  const handleRowCheckChange = (value: boolean, row: any) => {
    const index = selections.value.findIndex((item) => rowKey.every((key) => item[key] === row[key]));
    if (value && index === -1 && [CheckType.Uncheck, CheckType.HalfChecked].includes(selectType.value)) {
      // 非跨页选择时，勾选数据正常push
      selections.value.push(row);
      console.log('正常push');
    } else if (!value && index > -1 && [CheckType.Checked, CheckType.HalfChecked].includes(selectType.value)) {
      // 非跨页选择时，取消勾选数据正常splice
      selections.value.splice(index, 1);
      console.log('正常slice');
    } else if (
      !value &&
      index === -1 &&
      [CheckType.AcrossChecked, CheckType.HalfAcrossChecked].includes(selectType.value)
    ) {
      // 跨页全选/半选时，取消勾选数据push
      selections.value.push(row);
      if (selections.value.length === dataCount.value) {
        // 跨页半选/全选时，当取消勾选的数据和可选总数相同时，即清空
        console.log('row触发清空');
        selections.value = [];
      }
      console.log(typeof selections.value.length, 'length');
      console.log(typeof dataCount.value, 'dataCount');
      console.log(selections.value.length === dataCount.value, '??????????');
      console.log('取消push');
    } else if (value && index > -1 && selectType.value === CheckType.HalfAcrossChecked) {
      // 跨页半选时，勾选数据splice
      selections.value.splice(index, 1);
      console.log('勾选slice');
    }
    handleSetSelectType();
  };

  return {
    selectType, // 全选框状态
    selections, // 选中的数据
    renderSelection, // 渲染全选框组件
    renderTableTip, // 渲染表格中间数据提示
    handleRowCheckChange, // 行的选择框操作
    handleSelectionAll, // 全选操作
    handleClearSelection, // 清空全选
  };
}
