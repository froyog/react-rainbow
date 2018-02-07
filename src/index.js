import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import createTheme from './styles/createTheme';
import Reboot from './Reboot';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';


const Root = (
    <ThemeProvider theme={createTheme()}>
        <Reboot>
            <App/>
        </Reboot>
    </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
