# General

React Rainbow 是 [Rainbow Project](https://rainbow.twtstudio.com) 的 React 实现，在 Rainbow Project 的基础上进行改造，并尽量保留了其神韵。 同时参考 天外天主站(2016) 设计稿 和 天外天系列网站设计规范概要（链接已失效）。

## 浏览器兼容

适配 IE 11 及以上版本，IE 10 不保证适配。

为确保国产套壳浏览器的兼容性，请使用

```html
<meta name="renderer" content="webkit">
```

强制使用chrome内核渲染。

以及

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
```

要求 IE 使用最高版本内核或激活 Chorme Frame。

注：由于对 flex 的大量使用，IE 9 及以下版本完全不适配。

注2：React 早已[放弃](https://reactjs.org/blog/2016/04/07/react-v15.html)对 IE 8 的支持

