# Card

卡片可以包含一个主题的照片、文字和链接。

对于没有交互需要，或承载同一类别的相同内容的容器，推荐使用[列表](/react/docs/components/List)，典型错误案例可参考[Material Design Guidelines](https://material.io/guidelines/components/cards.html#cards-usage)

## 简单卡片

就是很简单的卡片，包含最基本内容。

{{ [DEMO](Simple) }}

## 包含图像的卡片

如果想让卡片包含图片，可使用 `<CardImage />`。

目前仅支持图片，如果有其他媒体文件需求（video / audio），可能在后续更新中加入。

{{ [DEMO](Media) }}

## Card Action

当卡片中包含交互动作时，可使用 `<CardAction />`。

{{ [DEMO](Action) }}

## 翻转颜色

可将背景色与字体颜色翻转，背景色默认使用 `theme.colors.primary`

{{ [DEMO](Inverse) }}

## Props: `<Card />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
component | string &vert; func | `'div'` | 根节点使用的标签（或组件）
inverse | bool | false | 设定为 `true` 时，卡片会使用 `theme.colors.primary` 作为背景颜色

## Props: `<CardContent />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
component | string &vert; func | `'section'` | 根节点使用的标签（或组件）

## Props `<CardImage />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
src* | string | | 图片的 `src` 属性
component | string &vert; func | `'section'` | 根节点使用的标签（或组件）

## Props `<CardAction />`
Name | Type | Default | Description
---- | ---- | ------- | -----------
component | string &vert; func | `'section'` | 根节点使用的标签（或组件）