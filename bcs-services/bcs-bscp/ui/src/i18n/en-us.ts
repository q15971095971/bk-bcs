export default {
  // 服务列表
  我的服务: 'My Service',
  全部服务: 'All Services',
  新建服务: 'New Service',
  你尚未创建或加入任何服务: 'You have not created or joined any service',
  立即创建: 'Create now',
  申请权限: 'Apply for right',
  服务名称: 'Service Name',
  form_服务名称: 'Service name',
  服务属性: 'Service Attribute',
  服务别名: 'Service Alias',
  form_服务别名: 'Service alias',
  数据格式: 'Data format',
  保存: 'Submit',
  编辑服务: 'Edit Service',
  数据类型: 'Data type',
  文件型: 'File Type',
  键值型: 'Key-Value Type',
  任意类型: 'Arbitrary type',
  配置管理: 'Config Manage',
  所属业务: 'Subordinate Business',
  服务描述: 'Service description',
  提交: 'Submit',
  取消: 'Cancel',
  接入方式: 'Access method',
  创建者: 'Creator',
  创建时间: 'Creation time',
  配置文件: 'Configuration File',
  配置项: 'Configuration Item',
  个配置文件: 'configuration file',
  个配置项: 'configuration item',
  未更新: 'Not updated',
  最新上线: 'Latest online',
  申请服务权限: 'Apply for service permission',
  服务新建成功: 'Service creation successful',
  接下来你可以在服务下新增配置文件: 'Next you can add a configuration file under the service',
  接下来你可以在服务下新增配置项: 'Next you can add configuration items under the Services',
  新增配置文件: 'New Configuration File',
  新增配置项: 'New Configuration Item',
  稍后再说: 'Later on',
  编辑: 'Edit',
  最小长度2个字符: 'The minimum length is 2 characters',
  最大长度32个字符: 'The value contains a maximum of 32 characters',
  '服务名称由英文、数字、下划线、中划线组成且以英文、数字开头和结尾': 'The service name contains letters, digits, underscores (_), and hyphens (-), and starts and ends with letters, digits',
  '服务别名由中文、英文、数字、下划线、中划线且必须以中文、英文、数字开头和结尾': 'The service alias can contain Chinese, English, digits, underscores (_), and hyphens (-) and must start and end with Chinese, English, and digits',
  '请输入2-32字符，只允许英文、数字、下划线、中划线且必须以英文、数字开头和结尾': 'Please enter 2-32 characters, only allow English, numbers, down lines, mid-line lines, and must start with English, numbers and ending',
  '请输入2-128字符，只允许中文、英文、数字、下划线、中划线且必须以中文、英文、数字开头和结尾': 'Please enter 2-128 characters, only allow Chinese, English, numbers, lines, lines, mid-line lines, and must start with Chinese, English, numbers, and ending',
  服务描述限制200字符: 'Service description limit 200 characters',
  更新者: 'Regenerator',
  tips: {
    config: `File type: Usually stored in the form of a file, usually has good readability and maintainability
    Key-value type: stored in the form of key-value pairs, where key is used to identify a configuration item, value is the specific content of the configuration item, kv type configuration is usually stored in the database, using the SDK or API to read`,
    type: `arbitrary type: The type of the configuration item is not restricted. If you select one of the following types, only configuration items of the specified type can be created
         string: One-line string
         number: Numeric values, including integers, floating-point numbers, and checksum data types
         text: Multi-line string text, unverified data structure, size 2Mb
         json、xml、yaml: For structured data in different formats, the data structure is checked`,
  },

  // 导航栏
  服务配置中心: 'BSCP',
  服务管理: 'Service Management',
  分组管理: 'Group Management',
  全局变量: 'Global Variable',
  配置模板: 'Configuration Template',
  脚本管理: 'Script Management',
  服务密钥: 'Service Credentials',
  产品文档: 'Product Documentation',
  版本日志: 'Version Log',
  功能特性: 'Features',
  问题反馈: 'Problem Feedback',
  退出登录: 'Log out',
  新建业务: 'New Business Creation',

  // 配置管理
  版本名称: 'Version Name',
  未命名版本: 'Unnamed Version',
  版本对比: 'Version Comparison',
  版本废弃: 'Version Deprecation',
  确认废弃该版本: 'Confirm deprecation of this version.',
  '此操作不会删除版本，如需找回或彻底删除请去版本详情的废弃版本列表操作': 'This operation will not delete the version. If you need to recover or permanently delete it, please go to the deprecated version list in the version details and proceed with the necessary actions.',
  可用版本: 'Available Versions',
  废弃版本: 'Deprecated Versions',
  '版本名称/版本说明/修改人': 'Version Name / Version Description / Modified',
  版本: 'Version',
  版本描述: 'Version Description',
  已上线分组: 'Released Groups',
  创建人: 'Creator',
  生成时间: 'Generation Time',
  状态: 'Status',
  已废弃: 'Deprecated',
  未上线: 'Not Released',
  已上线: 'Released',
  操作: 'Operations',
  只支持未上线版本: 'Only supports unreleased versions',
  恢复: 'Restore',
  删除: 'Delete',
  版本详情: 'Version Details',
  '配置文件名/创建人/修改人': 'Configuration File Name / Creator / Modifier',
  新建配置文件: 'New Configuration File',
  新建配置项: 'New Configuration Item',
  手动新增: 'Manually Add',
  批量上传: 'Bulk Upload',
  从配置模板导入: 'Import from Configuration Template',
  批量导入: 'Bulk Import',
  配置文件名称: 'Configuration file name',
  '请输入1~64个字符，只允许英文、数字、下划线、中划线或点': 'Please enter 1 to 64 characters, only allowing alphabets, numbers, underscores, hyphens, or dots.',
  配置文件路径: 'Configuration file path',
  '客户端拉取配置文件后存放路径为：临时目录/业务ID/服务名称/files/配置文件路径，除了配置文件路径其它参数都在客户端sidecar中配置': 'The path for storing the configuration file after the client retrieves it is: temporary directory/business ID/service name/files/configuration file path. Except for the configuration file path, all other parameters are configured in the client sidecar',
  请输入绝对路径: 'Please enter the absolute path',
  配置文件描述: 'Configuration file description',
  配置文件格式: 'Configuration file format',
  文件权限: 'File permissions',
  请输入三位权限数字: 'Please enter a three-digit permission number.',
  '只能输入三位 0~7 数字': 'You can only enter a three-digit number from 0 to 7.',
  我知道了: 'I understand',
  读: 'Read',
  写: 'Write',
  执行: 'Execute',
  用户: 'User',
  用户组: 'User group',
  配置内容: 'Configuration content',
  文件大小100M以内: 'File size within 100MB',
  '属主（own）': 'Owner',
  '属组（group）': 'Group',
  '其他人（other）': 'Other',
  最大长度64个字符: 'Maximum length of 64 characters',
  '请使用中文、英文、数字、下划线、中划线或点': 'Please use Chinese, English, numbers, underscores, hyphens, or dots',
  '文件权限 不能为空': 'File permissions cannot be empty',
  文件own必须有读取权限: 'The file owner must have read permission',
  最大长度1024个字符: 'Maximum length of 1024 characters',
  '无效的路径,路径不符合Unix文件路径格式规范': 'Invalid path, the path does not comply with the Unix file path format specification',
  最大长度200个字符: 'Maximum length of 200 characters',
  请上传文件: 'Please upload the file',
  配置内容不能超过50M: 'Configuration content cannot exceed 50MB',
  配置项名称: 'Configuration item name',
  配置项值: 'Configuration item value',
  '请输入(仅支持大小不超过2M)': 'Please enter (only supports size no more than 2M)',
  最大长度128个字符: 'Maximum length 128 characters',
  '只允许包含中文、英文、数字、下划线 (_)、连字符 (-)，并且必须以中文、英文、数字开头和结尾': 'Only Chinese, English, numbers, underscores (_), hyphens (-) are allowed, and must start and end with Chinese, English, numbers',
  配置项值不为数字: 'Configuration item value is not a number',
  结果预览: 'Results preview',
  已选择导入: 'Import selected',
  '个模板套餐，可按需要切换模板版本': 'template package, template version can be switched as needed',
  暂无预览: 'No preview yet',
  请先从左侧选择导入的模板套餐: 'Please select the imported template package from the left first',
  '检测到模板冲突，无法导入': 'Template conflict detected and cannot be imported',
  导入: 'Import',
  配置文件导入成功: 'Configuration file imported successfully',
  '检测到模板冲突，请先删除冲突套餐': 'Template conflict detected, please delete the conflicting package first',
  模板名称: 'Template name',
  模板路径: 'Template path',
  版本号: 'version number',
  该套餐下暂无模板: 'There are currently no templates under this package',
  批量上传配置文件: 'Upload configuration files in batches',
  上传配置文件包: 'Upload configuration file package',
  '支持扩展名：.zip  .tar  .gz': 'Supported extensions: .zip .tar .gz',
  上传文件: 'Upload files',
  '确认放弃下方修改，重新上传配置项包？': 'Are you sure to discard the modifications below and re-upload the configuration item package?',
  重新上传: 'Re-upload',
  上传中: 'uploading',
  共将导入: 'A total of',
  '个配置项，其中': 'configuration item will be imported',
  '个已存在,导入后将': 'of which already exists. The original configuration will',
  覆盖原配置: 'be overwritten after importing',
  去上传: 'Go to upload',
  导入配置文件成功: 'Import configuration file successfully',
  已存在配置文件: 'Configuration file already exists',
  批量设置配置文件描述: 'Batch setting configuration file description',
  批量设置文件权限: 'Set file permissions in batches',
  '只能输入三位 0~7 数字且文件own必须有读取权限': 'Only three digits 0~7 can be entered and the file own must have read permission.',
  批量设置用户: 'Set up users in batches',
  批量设置用户组: 'Set user groups in batches',
  搜索模板套餐: 'Search template packages',
  管理模板: 'Administrative templates',
  导入配置模板套餐时无法移除已有配置模板套餐: 'Existing configuration template packages cannot be removed when importing configuration template packages',
  '该套餐中没有可用配置文件，无法被导入到服务配置中': 'There is no configuration file available in this package and cannot be imported into the service configuration.',
  配置文件内容: 'Configuration file content',
  仅支持大小不超过: 'Only supports sizes up to',
  分隔符: 'delimiter',
  搜索: 'search',
  全屏: 'full screen',
  退出全屏: 'Exit Full Screen',
  '按 Esc 即可退出全屏模式': 'Press Esc to exit full screen mode',
  请检查是否已正确使用分隔符: 'Please check that the delimiter has been used correctly',
  '类型必须为 string 或者 number': 'Type must be string or number',
  '类型为number 值不为number': 'The type is number and the value is not number.',
  value不能为空: 'value cannot be empty',
  空字符: 'null character',
  自定义: 'customize',
  '您输入的分隔符错误,请重新输入': 'The delimiter you entered is wrong, please re-enter it.',
  '您输入的分隔符过长,请重新输入': 'The delimiter you entered is too long, please re-enter it',
  设置变量: 'Set Variables',
  设置变量成功: 'Set variable successfully',
  恢复默认值: 'Restore Defaults',
  '如果以下变量存在于全局变量中，其值将被重置为全局变量的默认值': 'If the following variable exists in a global variable, its value will be reset to the default value of the global variable',
  暂无数据: 'No data',
  变量名称: 'Variable name',
  类型: 'Type',
  变量值: 'Variable value',
  变量说明: 'Variable description',
  被引用: 'Quoted',
  不是数字类型: 'Not a numeric type',
  查看变量: 'View Variables',
  关闭: 'Closure',
  配置项值预览: 'Configuration item value preview',
  修改人: 'Modifier',
  修改时间: 'Change the time',
  变更状态: 'Change status',
  查看: 'View',
  对比: 'Compared',
  '确认删除该配置项？': 'Confirm to delete this configuration item?',
  删除配置项成功: 'Deletion of configuration item successful',
  恢复配置项成功: 'Configuration items restored successfully',
  '一旦删除，该操作将无法撤销，请谨慎操作': 'Once deleted, the operation cannot be undone, please proceed with caution',
  '配置项删除后，可以通过恢复按钮撤销删除': 'After the configuration item is deleted, the deletion can be undone through the restore button.',
  文本文件: 'text file',
  二进制文件: 'binary file',
  文本: 'text',
  二进制: 'binary',
  新增: 'New',
  修改: 'Revise',
  灰度中: 'Grayscale',
  搜索结果为空: 'Search results are empty',
  '可以尝试 调整关键词 或': 'You can try adjusting keywords or',
  清空筛选条件: 'Clear filters',
  编辑配置项: 'Edit configuration items',
  编辑配置项成功: 'Edit configuration item successfully',
  查看配置项: 'View configuration items',
  线上版本: 'Online version',
  对比版本: 'Compare version',
  当前版本: 'Current version',
  上线版本: 'Online version',
  只查看差异文件: 'View only diff files',
  搜索配置文件名称: 'Search profile name',
  没有差异配置文件: 'No diff profile',
  只查看差异项: 'View only differences',
  搜索配置项名称: 'Search configuration item name',
  没有差异配置项: 'No differential configuration items',
  '前/后置脚本': 'Pre/Post Script',
  该版本下文件不存在: 'The file does not exist in this version',
  文件已被删除: 'File has been deleted',
  文件属性: 'file properties',
  文件内容: 'file content',
  变化: 'Variety',
  配置模板版本: 'Configure template version',
  配置路径: 'Configuration path',
  移除套餐: 'Remove plan',
  替换版本: 'Replacement version',
  '确认删除该配置文件？': 'Confirm to delete this profile?',
  '确认移除该配置模板套餐？': 'Are you sure to remove this configuration template package?',
  配置模板套餐: 'Configure template package',
  '移除后本服务配置将不再引用该配置模板套餐，以后需要时可以重新从配置模板导入': 'After removal, the service configuration will no longer reference the configuration template package. You can re-import it from the configuration template if needed in the future.',
  非模板配置: 'Non-template configuration',
  移除模板套餐成功: 'Template package removed successfully',
  删除配置文件成功: 'Configuration file deleted successfully',
  编辑配置文件: 'Edit configuration file',
  目标版本: 'target version',
  当前最新为: 'The current latest is',
  模板版本更新成功: 'Template version updated successfully',
  查看配置文件: 'View configuration file',
  '配置项名/创建人/修改人': 'Configuration item name/creator/modifier',
  生成版本: 'Build Version',
  版本生成中: 'Version is being generated',
  版本信息: 'Version Information',
  同时上线版本: 'Simultaneous online version',
  服务变量赋值: 'Service variable assignment',
  '仅允许使用中文、英文、数字、下划线、中划线、点，且必须以中文、英文、数字开头和结尾': 'Only Chinese, English, numbers, underlines, dashes, and dots are allowed, and must start and end with Chinese, English, numbers.',
  编辑中: 'Edit',
  全部实例: 'All instances',
  默认分组: 'Default grouping',
  已上线实例: 'Online instance',
  除以下分组之外的所有实例: 'All instances except the following groupings',
  对比并上线: 'Compare and go online',
  版本已上线: 'Version is online',
  请选择上线分组: 'Please select an online group',
  本次上线分组: 'This online group',
  上线说明: 'Online instructions',
  确定上线: 'Confirm to go online',
  前置脚本: 'Prescript',
  后置脚本: 'Postscript',
  移除: 'Remove',
  上传: 'Upload',
  请至少选择一个排除分组实例: 'Please select at least one negative grouping instance',
  选择上线实例范围: 'Select the online instance range',
  全部实例上线: 'All instances are online',
  排除分组实例上线: 'Exclude group instances from going online',
  选择分组实例上线: 'Select a group instance to go online',
  '其它版本没有上线任何分组（默认版本除外），无法使用此选项': 'Other versions do not have any groups online (except the default version), so this option cannot be used',
  全选: 'Select all',
  全不选: 'Unselect all',
  暂无已上线的可选版本: 'There is currently no available version available online',
  '搜索分组名称/标签key': 'Search group name/tag key',
  已上线分组不可取消选择: 'Online groups cannot be deselected',
  上线预览: 'Online preview',
  '上线后，以下分组将从以下各版本更新至当前版本': 'After going online, the following groups will be updated from the following versions to the current version',
  请先从左侧选择待上线的分组范围: 'Please select the group range to be launched from the left first',
  首次上线: 'First time online',
  按版本选择: 'Select by version',
  共: 'Common',
  个分组: 'group',
  变更版本: 'Change version',
  调整分组上线: 'Adjust group online',
  该脚本未上线: 'The script is not online',
  确定: 'Confirm',
  预览: 'Preview',
  保存设置: 'Save settings',
  脚本预览: 'Script preview',
  '<不使用脚本>': '<No script>',
  初始化脚本设置成功: 'Initialization script set up successfully',
  确认恢复该版本: 'Confirm to restore this version',
  此操作会把改版本恢复至可用版本列表: 'This operation will restore the modified version to the list of available versions',
  版本恢复成功: 'Version restored successfully',
  确认删除该版本: 'Confirm to delete this version',
  版本删除成功: 'Version deleted successfully',
  请输入关键字: 'Please enter a keyword',
  '格式：': 'Format:',
  'key 类型 value': 'key type value',
  新增服务密钥: 'Add service key',
  调整分组上线成功: 'Adjustment of grouping went online successfully',
  请选择: 'Please select',
  配置项值已复制: 'The configuration item value has been copied',

  // 分组管理
  新增分组: 'New group',
  按标签分类查看: 'View by tag',
  '分组名称/标签选择器': 'Group name/Label selector',
  分组名称: 'Group name',
  标签选择器: 'Tag selector',
  服务可见范围: 'Service visibility',
  公开: 'public',
  分组状态: 'Group status',
  上线服务数: 'Online services',
  编辑分组: 'Edit group',
  '确认删除该分组？': 'Confirm to delete this group?',
  '分组由 1 个或多个标签选择器组成，服务配置版本选择分组上线结合客户端配置的标签用于灰度发布、A/B Test等运营场景，详情参考文档：': 'The group consists of one or more tag selectors. The service configuration version selects the group and goes online in combination with the tags configured on the client for grayscale publishing, A/B Test and other operational scenarios. For details, refer to the document:',
  删除分组成功: 'Group deleted successfully',
  '分组已上线，不能': 'The group is online and cannot be',
  创建分组成功: 'Group created successfully',
  请输入分组名称: 'Please enter a group name',
  指定服务: 'designated services',
  请选择服务: 'Please select a service',
  '标签选择器由key、操作符、value组成，筛选符合条件的客户端拉取服务配置，一般用于灰度发布服务配置': 'The tag selector consists of key, operator, and value. It filters the client pull service configuration that meets the conditions. It is generally used for grayscale publishing service configuration.',
  分组规则表单不能为空: '分组规则表单不能为空',
  '仅允许使用中文、英文、数字、下划线、中划线，且必须以中文、英文、数字开头和结尾': 'Only Chinese, English, numbers, underscores, and dashes are allowed, and must start and end with Chinese, English, numbers.',
  指定服务不能为空: 'The specified service cannot be empty',
  编辑分组成功: 'Edit group successfully',
  上线服务: 'Online service',
  '服务名称/服务版本': 'Service name/Service version',
  服务版本: 'Service version',

  // 全局变量
  配置模板与变量: 'Configure templates and variables',
  新增变量: 'New variable',
  导入变量: 'Import variables',
  请输入变量名称: 'Please enter variable name',
  默认值: 'Default value',
  描述: 'description',
  '确认删除该全局变量？': 'Are you sure to delete this global variable?',
  '一旦删除，该操作将无法撤销，服务配置文件中不可再引用该全局变量，请谨慎操作': 'Once deleted, the operation cannot be undone, and the global variable can no longer be referenced in the service configuration file. Please operate with caution.',
  '定义全局变量后可供业务下所有的服务配置文件引用，使用go template语法引用，例如{{ .bk_bscp_appid }},变量使用详情请参考：': 'After defining global variables, they can be referenced by all service configuration files under the business. Use go template syntax for reference, such as {{ .bk_bscp_appid }}. For details on variable usage, please refer to:',
  删除变量成功: 'Delete variable successfully',
  创建: 'Create',
  创建变量成功: 'Variable created successfully',
  变量名称不能为空: 'Variable name cannot be empty',
  '仅允许使用中文、英文、数字、下划线，且不能以数字开头': 'Only Chinese, English, numbers, and underscores are allowed, and cannot start with a number.',
  '无效默认值，类型为number值不为数字': 'Invalid default value, type number value is not a number',
  编辑变量: 'Edit variables',
  编辑变量成功: 'Edit variable successfully',
  变量内容: 'variable content',
  变量必须以bk_bscp_或BK_BSCP_开头: 'Variable must start with bk_bscp_ or BK_BSCP_',
  导入变量成功: 'Import variables successfully',
  '示例：': 'Example:',
  '变量名 变量类型 变量值 变量描述（可选）': 'Variable name Variable type Variable value Variable Description (optional)',
  ' bk_bscp_nginx_port number 8080 nginx端口': ' bk_bscp_nginx_port number 8080 nginx port',

  // 配置模板
  '配置模板用于统一业务下服务间配置文件复用，可以在创建服务配置时引用配置模板。': 'Configuration templates are used to reuse configuration files between services under unified services, and can be referenced when creating service configurations.',
  搜索空间: 'Search Space',
  创建空间: 'New Space',
  '确认删除该配置模板空间？': 'Are you sure to delete this configuration template space?',
  '空间可将业务下不同使用场景的配置模板文件隔离，每个空间内的配置文件路径+配置文件名称是唯一的，每个业务下会自动创建一个默认空间': 'Spaces can isolate configuration template files for different usage scenarios under a business. The configuration file path + configuration file name in each space is unique. A default space will be automatically created under each business.',
  未能删除: 'Unable to delete',
  请先确认删除此空间下所有配置文件: 'Please confirm first to delete all configuration files in this space',
  请先确认删除此空间下所有配置套餐: 'Please confirm first to delete all configuration packages in this space',
  删除空间成功: 'Space deleted successfully',
  新建空间: 'New a new space',
  模板空间名称: 'Template space name',
  模板空间描述: '模板空间描述',
  创建空间成功: 'Template space description',
  编辑空间: 'Edit Space',
  编辑空间成功: 'Edit space successfully',
  新建模板套餐: 'New template package',
  全部配置文件: 'All profiles',
  未指定套餐: 'No package specified',
  克隆: 'Clone',
  克隆模板套餐: 'Clone template package',
  克隆成功: 'Cloning successful',
  创建成功: 'Created successfully',
  '确认删除该配置模板套餐？': 'Are you sure to delete this configuration template package?',
  '一旦删除，该操作将无法撤销，以下服务配置的未命名版本中引用该套餐的内容也将清除': 'Once deleted, the operation cannot be undone, and references to the package in the unnamed version of the following service configuration will also be cleared.',
  暂无未命名版本引用此套餐: 'There is currently no unnamed version referencing this package.',
  引用此套餐的服务: 'Reference services for this package',
  删除配置模板套餐成功: 'Deletion of configuration template package successful',
  编辑模板套餐: 'Edit Template Package',
  编辑成功: 'Edited successfully',
  模板套餐名称: 'Template package name',
  模板套餐描述: 'Template package description',
  '提醒：修改可见范围后，服务': 'Reminder: After modifying the visible range, the service',
  将不再引用此套餐: 'This package will no longer be referenced',
  使用模板: 'Use templates',
  新服务中使用: 'Used in new services',
  当前使用此套餐的服务: 'Current services using this package',
  '服务名称/配置文件版本': 'Service name/config file version',
  配置文件版本: 'Profile version',
  引用此配置文件的服务: 'Services that reference this profile',
  '配置文件名称/路径/描述/创建人/更新人': 'Configuration file name/path/description/creator/updater',
  所在套餐: 'The package you are in',
  更新人: 'Updater',
  更新时间: 'Update time',
  版本管理: 'Version management',
  添加至套餐: 'Add to package',
  移出套餐: 'Move out of package',
  添加至: 'Add to',
  添加配置文件: 'New configuration file',
  添加已有配置文件: 'Add existing configuration file',
  去创建: 'to create',
  新建配置文件成功: 'New configuration file successfully created',
  创建至套餐: 'Create to package',
  模板套餐: 'Template package',
  使用此套餐的服务: 'Use the services of this package',
  '若未指定套餐，此配置文件模板将无法被服务引用。后续请使用「添加至」或「添加已有配置文件」功能添加至指定套餐': 'If no package is specified, this configuration file template cannot be referenced by the service. Later, please use the "Add to" or "Add existing profile" function to add it to the specified package.',
  以下服务配置的未命名版本引用目标套餐的内容也将更新: 'Unnamed versions of the following service configurations referencing target packages will also be updated',
  从已有配置文件添加: 'Add from existing configuration file',
  '配置文件名称/路径/描述': 'Configuration file name/path/description',
  已选: 'selected',
  请先从左侧选择配置文件: 'Please select the profile from the left first',
  添加: 'Add to',
  添加配置文件成功: 'Configuration file added successfully',
  上传至套餐: 'Upload to package',
  批量添加至: 'Add in bulk to',
  添加至模板套餐: 'Add to template package',
  以下服务配置的未命名版本中将添加已选配置文件的: 'The following unnamed version of the service configuration will be added with the selected profile\'s',
  目标模板套餐: 'Target Template Package',
  批量删除: 'batch deletion',
  '确认删除以下配置文件？': 'Are you sure you want to delete the following configuration files?',
  批量移出: 'Move out in batches',
  批量移出当前套餐: 'Move out current plans in batches',
  确定移出: 'Confirm to move out',
  所在模板套餐: 'The template package you are in',
  以下服务配置的未命名版本中引用此套餐的内容也将更新: 'References to this offer in the unnamed version of the service configuration below will also be updated',
  配置文件移出套餐成功: 'The configuration file was successfully moved out of the package',
  '确认从配置套餐中移出该配置文件?': 'Are you sure you want to remove this profile from the profile?',
  当前: 'current',
  '移出后配置文件将不存在任一套餐。你仍可在「全部配置文件」或「未指定套餐」分类下找回。': 'After the migration, the configuration file will not exist for any package. You can still retrieve it under the "All Profiles" or "Unspecified Packages" categories.',
  确认移出: 'Confirm removal',
  移出套餐成功: 'Moved out of package successfully',
  新建版本: 'New version',
  '版本号/版本说明/更新人': 'Version number/version description/updater',
  选择载入版本: 'Select version to load',
  版本说明: 'Release Notes',
  展开列表: 'Expand list',
  '支持扩展名：.bin，文件大小100M以内': 'Supported extension: .bin, file size within 100M',
  创建版本成功: 'Version created successfully',
  '确认更新配置文件版本？': 'Confirm to update the configuration file version?',
  以下套餐及服务未命名版本中引用的此配置文件也将更新: 'This configuration file referenced in the unnamed versions of the following packages and services will also be updated',
  引用此模板的服务: 'Services that reference this template',

  // 脚本管理
  全部脚本: 'All scripts',
  未分类: 'Uncategorized',
  新建脚本: 'New Script',
  脚本名称: 'Script name',
  脚本语言: 'Scripting language',
  分类标签: 'Classification tags',
  '确认删除该脚本？': 'Are you sure you want to delete this script?',
  脚本: 'script',
  '一旦删除，该操作将无法撤销，以下服务配置的未命名版本中引用该脚本也将清除': 'Once deleted, the operation cannot be undone, and the script referenced in the unnamed version of the service configuration below will also be cleared.',
  暂无未命名版本引用此脚本: 'There is currently no unnamed version referencing this script.',
  引用此脚本的服务: 'The service that references this script',
  删除版本成功: 'Delete version successfully',
  请选择标签或输入新标签按Enter结束: 'Please select a label or enter a new label and press Enter to end',
  脚本描述: 'Script description',
  脚本内容: 'Script content',
  不能超过64个字符: 'Cannot exceed 64 characters',
  脚本创建成功: 'Script created successfully',
  关联配置文件: 'Associated configuration files',
  '服务名称/版本名称/被引用的版本': 'Service name/version name/referenced version',
  脚本版本: 'script version',
  复制并新建: 'Copy and create new',
  '确认删除该脚本版本？': 'Are you sure you want to delete this script version?',
  '确定上线此版本？': 'Are you sure you want to launch this version?',
  '上线后，之前的线上版本将被置为「已下线」状态': 'After going online, the previous online version will be set to "offline" status',
  '当前已有「未上线」版本': 'There is currently a "not online" version',
  前往编辑: 'Go to edit',
  创建版本: 'Create version',
  选择载入脚本: 'Select load script',
  '无效名称，只允许包含中文、英文、数字、下划线()、连字符(-)、空格，且必须以中文、英文、数字开头和结尾': 'Invalid name, only allowed to contain Chinese, English, numbers, underscores (), hyphens (-), spaces, and must start and end with Chinese, English, numbers',
  编辑版本: 'Edited version',
  脚本内容不能为空: 'Script content cannot be empty',
  编辑版本成功: 'Edit version successful',
  新建版本成功: 'New version successful',
  上线: 'Online',
  已下线: 'Offline',
  脚本类型: 'Script type',

  // 服务密钥
  '密钥仅用于 SDK/API 拉取配置使用。服务管理/配置管理/分组管理等功能的权限申请，请前往': 'The key is only used for SDK/API pull configurations. To apply for permissions for functions such as service management/configuration management/group management, please go to',
  蓝鲸权限中心: 'Blue Whale Authority Center',
  新建密钥: 'New Credentials',
  '说明/更新人': 'Description/updater',
  密钥名称: 'Key name',
  密钥名称支持中英文: 'Key name supports Chinese and English',
  密钥: 'Credentials',
  待确认: 'to be confirmed',
  说明: 'Description',
  请输入密钥说明: 'Please enter a credentials description',
  关联规则: 'Association rules',
  已启用: 'Activated',
  已禁用: 'Disabled',
  关联服务配置: 'Associated service configuration',
  '确认删除密钥？': 'Confirm to delete credentials?',
  删除的密钥: 'Deleted credentials',
  无法找回: 'unable to retrieve',
  ',请谨慎操作！': ', please operate with caution!',
  请输入密钥名称: 'Please enter a credentials name',
  以确认删除: 'to confirm deletion',
  服务密钥已复制: 'Service credentials copied',
  新建服务密钥成功: 'New service credentials successfully',
  密钥名称修改成功: 'Credentials name modified successfully',
  密钥说明修改成功: 'Credentials description modified successfully',
  确定禁用此密钥: 'Confirm to disable this key',
  '禁用密钥后，使用此密钥的应用将无法正常使用 SDK/API 拉取配置': 'After disabling a credentials, apps using this key will not be able to properly use the SDK/API to pull configurations',
  禁用: 'Disable',
  禁用成功: 'Disabled successfully',
  启用成功: 'Activated successfully',
  删除服务密钥成功: 'Service credentials deleted successfully',
  '已启用，不能删除': 'Enabled and cannot be deleted',
  无效名称: 'Invalid name',
  '只允许包含中文、英文、数字、下划线 (_)、连字符 (-)，并且必须以中文、英文、数字开头和结尾。': 'Only Chinese, English, numbers, underscores (_), hyphens (-) are allowed, and must start and end with Chinese, English, numbers.',
  编辑规则: 'Edit rules',
  编辑规则成功: 'Edit rules successfully',
  '文件型配置，以选择服务myservice为例:': 'File-type configuration, taking the service myservice as an example:',
  '键值（KV）型配置，以选择服务myservice为例:': 'Key-value (KV) configuration, taking the service myservice as an example:',
  '关联myservice服务下所有的配置(包含子目录)': 'Associate all configurations under the myservice service (including subdirectories)',
  '关联myservice服务/etc目录下所有的配置(不含子目录)': 'Associate all configurations in the myservice/etc directory (excluding subdirectories)',
  '关联myservice服务/etc/nginx/nginx.conf文件': 'Associated myservice service/etc/nginx/nginx.conf file',
  关联myservice服务下所有配置项: 'Associate all configuration items under the myservice service',
  关联myservice服务下所有以demo_开头的配置项: 'Associate all configuration items starting with demo_ under the myservice service',
  共有: 'There is',
  项关联规则: 'association rule in total',
  暂未设置关联规则: 'No association rules have been set yet',
  配置关联规则: 'Configure association rules',
  查看规则示例: 'View rule examples',
  撤销本次删除: 'Undo this deletion',
  '输入的规则有误，请重新确认': 'The entered rules are incorrect, please reconfirm',
  请输入文件路径: 'Please enter file path',
  请输入配置项名称: 'Please enter the configuration item name',

  // 公共组件
  页面不存在: 'Page does not exist',
  产品仅供内部体验: 'Product is for internal experience only',
  '如需体验，请联系': 'For experience, please contact',
  '你没有相应业务的访问权限，请前往申请相关业务权限': 'You do not have access rights to the corresponding business. Please apply for relevant business rights.',
  无: 'none',
  权限: 'permissions',
  无访问权限: 'No access',
  确认彻底删除: 'Confirm complete deletion',
  条配置文件: 'configuration file',
  '删除后不可找回，请谨慎操作。': 'It cannot be retrieved after deletion, so please operate with caution.',
  确认删除: 'confirm deletion',
  '确认离开当前页？': 'Are you sure you want to leave the current page?',
  离开会导致未保存信息丢失: 'Leaving will result in the loss of unsaved information',
  离开: 'Leave',
  需要申请的权限: 'Permissions required to apply',
  关联的资源实例: 'associated resource instance',
  无数据: 'no data',
  已申请: 'Already applied',
  去申请: 'Go apply',
  产品功能特性: 'Product features',
  技术支持: 'Technical Support',
  社区论坛: 'Community forum',
  产品官网: 'Product official website',
  请输入: 'Please enter',
  确认: 'Confirm',
};
