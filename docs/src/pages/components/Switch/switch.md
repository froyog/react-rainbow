# Switch

开关控制某一设置的打开和关闭两种状态，参考[Material Design Guidelines](https://material.io/guidelines/components/selection-controls.html#selection-controls-switch)

注意，开关为 `controlled` 组件，必须传入 `active` 属性来控制表明其打开和关闭状态，组件内部并不会自行设定这个状态值。更多关于 `controlled` 和 `uncontrolled` 的说明，可参考[React官方文档](https://reactjs.org/docs/uncontrolled-components.html)

{{ [DEMO](Switch) }}

## `label` 属性

给 `Switch` 添加一个 `label` 属性，在开关右侧显示文字标签

{{ [DEMO](Label) }}

## classes 列表

您可以通过传入 `customClasses` 属性来定制或覆盖原有样式，参考[定制]()

`Switch` 可定制的 `classes` 有

- `guide`
- `guideActive`
- `toggleWrapperActive`
- `toggle`
- `toggleActive`

{{ [DEMO](Custom) }}

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
onChange* | func | | 点击 `Switch` 触发的回调函数
active* | bool | | 打开或关闭的状态
disableRipple | bool | false | 禁用Ripple效果
disabled | bool | false | 禁用标签，设置为 `true` 时 `onChange` 函数将不会被调用
label | string | |　在 `Switch` 右侧显示的标签文本
