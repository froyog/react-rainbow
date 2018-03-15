# Styles Customization

React Rainbow 鼓励定制符合您的设计图或设计思路的样式。定制样式的方法主要有以下几种：

- 主题
- 通过 `customClasses`
- 覆盖原有 `classes`

## 主题

`theme` 是通过 `ThemeProvider` 传递的一个对象。它会通过 `context` 传递，所以所有组件的都会获得这个对象。

我们已经提供了一个默认的 `theme`，[通过 `createTheme()` 创建](/react/docs/getting-started/quick-start)，当然您也可以给 `createTheme()` 传入参数来自定义 `theme`。更多信息参见[主题](/react/docs/customizations/theming)

## 通过 `customClasses`

`customClasses` 的值会被 merge 到相应的 `classes` 上。注意，我们并没有为所有 `classes` 都提供 `customClasses` 选项，请参见需要定制的组件的文档，在 Props 表格中列出了它支持的所有 `customClasses`。

{{ [DEMO](CustomClasses) }}

## 覆盖原有 `classes`

如果您需要定制的样式没有被 `customClasses` 提供，您就需要直接覆盖原有 `classes` 的值。

由于是直接覆盖，原有的样式将不会被应用，您需要写好需要的全部样式。

{{ [DEMO](ClassOverriding) }}