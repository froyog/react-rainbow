# Lists

列表展示。注意使用场景与 `<Card />` 的[区分](https://material.io/guidelines/components/cards.html#cards-usage)。

由于列表的使用场景较多且比较自由，我们只提供了较基础的 API。

## 简单使用

`title` 内的文字使用 `<Typography type="subtitle">`。若需要定制可传入 `customClasses.title`。或自行实现。

{{ [DEMO](Simple) }}

## Secondary Action

Secondary Action 是与主要信息分隔开来的列表控件。即使给 `<ListItem />` 加上 `ripple` 属性，`<Switch />` 也能被单独点击。相关信息参见 [List Controls](https://material.io/guidelines/components/lists-controls.html)。

{{ [DEMO](Secondary) }}

## Props: `<List />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
component | string &vert; func | `'ul'` | 根节点使用的标签（或组件）
children* | node | | 
title | string | | 列表标题
customClasses | object | | 包含定制的 classes

### 可定制 classes

- title

## Props: `<ListItem />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
component | string &vert; func | `'li'` | 根节点使用的标签（或组件）
children* | node | | 
withBorder | bool | false | 给该元素下方添加一条 1px 的 `border`
ripple | bool | false | 在该元素上使用 ripple effect
disabled | bool | false |

## Props: `<ListText>`

Name | Type | Default | Description
---- | ---- | ------- | -----------
children* | node | | 
subtitle | string | | 可以给这段文本设置标题，样式默认使用 `<Tyopgraphy type="subtitle">`
inset | bool | false | 文字会向右缩进
customClasses | object | | 包含定制的 classes

### 可定制 classes

- subtitle
- children

## Props: `<ListSecondaryAction />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
children* | node | | 
