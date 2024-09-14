import { localT } from '../i18n';

// 资源类型
export const RECORD_RES_TYPE = {
  app_config: localT('服务配置'), // 2024.9 第一版只有这个字段
};

// 操作行为
export const ACTION = {
  Create: localT('创建服务'),
  Publish: localT('上线服务'),
  Update: localT('更新服务'),
  Delete: localT('删除服务'),
  PublishVersionConfig: localT('上线版本配置'), // 2024.9 第一版只有这个字段
};

// 资源实例
export const INSTANCE = {
  releases_name: localT('配置版本名称'),
  group: localT('配置上线范围'),
};

// 状态
export const STATUS = {
  PendApproval: localT('待审批'),
  PendPublish: localT('待上线'),
  RevokedPublish: localT('撤销上线'),
  RejectedApproval: localT('审批驳回'),
  AlreadyPublish: localT('已上线'),
  Failure: localT('失败'), // 脚本相关的才会有
  Success: localT('成功'), // 脚本相关的才会有
};

// 版本状态
export enum APPROVE_STATUS {
  PendApproval = 'PendApproval', // 待审批
  PendPublish = 'PendPublish', // 待上线
  RevokedPublish = 'RevokedPublish', // 撤销上线
  RejectedApproval = 'RejectedApproval', // 审批驳回
  AlreadyPublish = 'AlreadyPublish', // 已上线
  Failure = 'Failure',
  Success = 'Success',
}
