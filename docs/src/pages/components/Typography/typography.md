# Typography

此文档说明 `Typography` 组件，如果想了解 React Rainbow 使用的字体相关信息，请查看[字体]()

Rainbow Project 中[文字](http://rainbow.twtstudio.com/docs/2_1.html)这篇文档也有相关说明。

## `type` 属性

{{ [DEMO](Type) }}

## `align` 属性

字体的水平对齐方式

{{ [DEMO](Align) }}

## `color` 属性

{{ [DEMO](Color) }}

## `componentMapper` 属性

默认情况下我们提供一个 mapper 来为每一种 `type` 对应合适的 `component`，默认值参见下面的 Props 表。当然您也可以传入自定的 mapper。

若传入 `component` 属性的优先级较高，将会覆盖这个值。

{{ [DEMO](Mapper) }}

对于传入的 `title` type，并没有应用默认的 `h1`，而是使用了 mapper 中对应的 `h4`。

## Props

Name | Type | Default | Description
---- | ---- | ------- | -----------
component | one of type: `'string'`, `'func'` | | 根节点使用的标签（或组件），默认值根据 `componentMapper` 推断
type | one of: `'display-1'`, `'display-2'`, `'display-3'`, `'display-4'`, `'title'`, `'subtitle'`, `'body'`, `'blockquote'`, `'highlight'` | `'body'` | 
align | one of: `'center'`, `'left'`, `'right'`, `'justify'`, `'inherit'` | `'inherit'` | 文本的水平对齐方式
color | one of: `'primary'`, `'secondary'`, `'textSecondary'`, `'error'`, `'inherit'`, `'default'` | `'default'` | 
componentMapper | object | `{'display-1': 'h1', 'display-2': 'h1', 'display-3': 'h1', 'display-4': 'h1', title: 'h1', subtitle: 'h2', body: 'p', blockquote: 'blockquote', highlight: 'mark' }` | 将 `type` 映射到对应的 `component`
