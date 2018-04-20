# Textarea

注意：`<Textarea />` 为 Controled Component，必须传入 `value` 来保存期状态。组件内部不维护这个状态。关于 Controlled Component 和 Uncontrolled Component 的更多说明，参见 [React官方文档](https://reactjs.org/docs/uncontrolled-components.html)

{{ [DEMO](General) }}

## Props: `<Textarea />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
onChange* | func | | 内容变化时 `Textrea` 触发的回调函数
value* | string | | input的 `textarea` 值
disabled | bool | false | `input` 将被禁用
label* | string | | 标签，提示多行文本框的内容
name | string | | html name
id | string | | html id
cols | number | 40 |
rows | number | 8 |
fullWidth | bool | | 设置为 `true` 时，宽度设置为 `100%`

### 可定制 classes

- label
- textarea
