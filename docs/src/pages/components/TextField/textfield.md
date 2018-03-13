# Text Field

注意：`<TextField />` 为 Controled Component，必须传入 `value` 来保存期状态。组件内部不维护这个状态。关于 Controlled Component 和 Uncontrolled Component 的更多说明，参见 [React官方文档](https://reactjs.org/docs/uncontrolled-components.html)


{{ [DEMO](General) }}

## Props: `<TextField />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
onChange* | func | | 内容变化时 `TextField` 触发的回调函数
value* | string | | input的 `value` 值
disabled | bool | false | `input` 将被禁用
label* | string | | 标签，提示输入框的内容
name | string | | html name
id | string | | html id
type | string | `'text'` | html type
placeholder | string | | 占位文字
fullWidth | bool | | 设置为 `true` 时，宽度设置为 `100%`
error | string | | 有内容时，输入框颜色变为 `theme.colors.error`，且显示提示文本
helperText | string | | 输入框下方显示的提示文本
