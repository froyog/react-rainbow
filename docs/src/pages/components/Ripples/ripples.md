# Ripples

涟漪动画效果，用于创造涟漪将用户输入和表面反应联系起来。

我们提供了 `<RippleContainer />` 只需将其作为子组件挂载在需要创造涟漪效果的元素上即可。它可以自动响应 `click`，`touch` 等事件，并计算出涟漪的大小和位置。

我们也提供了更底层的 API，`<Ripple />`，使用它可以创造更复杂的动画，详见 [Choreography](https://www.mdui.org/design/motion/choreography.html#choreography-radial-reaction)。

## Ripple Container

**重要**：必须给 `<RippleContainer />` 的**父元素**设置 `position: relative`，进行定位。

{{ [DEMO](Container) }}

## `center` 属性

设置为 `true` 时，会居中显示所有 ripple。

{{ [DEMO](Center) }}

## Ripple

`<Ripple />` 不会响应事件，需要传入大小，位置等信息控制，相对较低层的API，详见 Props 列表。

根组件是 `<Transition />`。

## Props: `<RippleContainer />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
center | bool | false | 设置为 `true` 时，居中显示所有 ripple

## Props: `<Ripple />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
timeout | object | | 直接传入 `<Transition />`
in | bool | | 直接传入 `<Transition />`
rippleX | string | | ripple 中心点距左边界的距离
rippleY | string | | ripple 中心点距上边界的距离
rippleSize | string | | ripple 的大小