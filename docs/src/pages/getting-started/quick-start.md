# Quick Start

React Rainbow 中的组件是不能直接引用的，它们依赖于 `theme` 和相应的 `ThemeProvider` 才能正常工作。安装 `react-rainbow` 后我们已经提供了所需的组件和函数，当然您也可以从 `react-jss` 中自行引入。

`index.jsx`
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Reboot, createTheme } from 'react-rainbow';
import App from './App';

const rainbow = createTheme();
const Root = () => (
    <ThemeProvider theme={rainbow}>
        <Reboot>
            <App />
        </Reboot>
    <ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
```

`App.jsx`
```jsx
import React from 'react';
import { Button } from 'react-rainbow';

const App = () => (
    <Button color="primary">Hello World!</Button>
);

export default App
```

几点说明：
- `theme` 是由 `createTheme` 创建出来的主题，您也可以通过传入参数来自定义主题，阅读 [定制](/react/docs) 来获取更多信息。
- `Reboot` 包含了一些CSS重置，可以根据需求决定是否引入。