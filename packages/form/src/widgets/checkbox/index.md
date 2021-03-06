---
title: checkbox
subtitle: 多选框
type: Widgets
---

一组可选项中进行多项选择时

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
enum | 数据源，当数据源存在于表示一组多选框 | `SFSchemaEnumType[]` | -
readOnly | 禁用状态  | `boolean` | -
title | 无 `enum` 时表示多选框文本内容  | `string` | -
description | 无 `enum` 时表示多选框后帮助信息  | `string` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
asyncData | 异步数据源  | `() => Observable<SFSchemaEnumType[]>` | -
size | 大小，等同 `nzSize` | `string` | -
styleType | radio的样式  | `default, button` | `default`
checkAll | 是否需要全选  | `boolean` | -
checkAllText | 全选按钮文本  | `string` | `全选`
