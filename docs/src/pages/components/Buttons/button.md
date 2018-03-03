# Buttons

## `elevate` 属性

`Button` 分为三种类型：

- `raised` 
- `flat` 
- `float`

这三种类型各自的使用场景，参见 [Material Design Guidelines](https://material.io/guidelines/components/buttons.html)

这个属性命名为 `type` 比较合适，但 `type` 已经被HTML占用，所以命名为 `elevate` ，反应被提升的程度。

### Raised Buttons

`elevate` 属性设置为 `'raised'` ，这是默认值。

{{ [DEMO](ButtonRaised) }}

### Flat Buttons

`elevate` 属性设置为 `'flat'`。

无提升，按下时有颜色填充，参考 [Flat Buttons](https://material.io/guidelines/components/buttons.html#buttons-flat-buttons)

{{ [DEMO](ButtonFlat) }}

### Float Buttons

`elevate` 属性设置为 `float`。

{{ [DEMO](ButtonFloat) }}

## 按钮大小

使用 `size` 属性来调整按钮大小，`size` 可取 `large`，`medium`，`small`。

注意 Float Button （即 `elevate` 为 `float`的按钮），只有`small`和`medium`两种大小，可以参考 [Floating Action Button](https://material.io/guidelines/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button)

{{ [DEMO](ButtonSize) }}

## `fullWidth` 属性

使用 `fullWidth` 属性使 `Button` 撑满容器（即它的 `width` 设定为 `100%`）

{{ [DEMO](ButtonFullWidth) }}

## `Button` 作为链接使用

`Button` 可以被用于去往另一页面的导航链接使用，以 `react-router-dom` 为例：

**不要**试图用 `Link` （或 `NavLink` ）把 `Button` 包起来，这样也许可以起到效果，但破坏原有样式，正确的做法是把 `Link` 当作 `component` 传入。

{{ [DEMO](ButtonLink) }}

这是由于 `Button` 不能识别的属性（即下方 `PropTypes` 列表中没有的属性，例如 `to`， `activeClassName` 等），会被添加到该组件上（上例中为 `Link`）。

## 更复杂的操作

对于需要深度定制按钮的需求，可以使用 `<ButtonBase />`，`ButtonBase` 只定义了最基本的样式，所以可以高度定制。事实上 `Button` 就是在 `ButtonBase` 基础上添加样式实现的。

## Props: `<Button />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
elevate | one of: `flat`, `raised`, `float` | `'raised'` | 按钮的类型（提升等级）
color | one of: `default`, `primary`, `secondary`, `inherit` | `'default'` | 按钮的颜色
component | string &vert; func | | 根节点使用的标签（或组件）
disabled | bool | false | 按钮是否被禁用
fullWidth | bool | false | 按钮是否撑满容器
size | one of: `small`, `medium`, `large` | `'medium'` | 按钮大小

## Props: `<ButtonBase />`

Name | Type | Default | Description
---- | ---- | ------- | -----------
centerRipple | bool | false | `Ripple` 是否置于容器中心
component | string &vert; func | `'button'` | 根节点使用的标签（或组件）
disableRipple | bool | false | 禁用Ripple效果
disabled | bool | false |
