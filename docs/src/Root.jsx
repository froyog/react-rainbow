import React from 'react';
import { ThemeProvider } from 'react-jss';
import { createTheme, Reboot } from '../../src';
import App from './App';


const Root = () => (
    <ThemeProvider theme={createTheme()}>
        <Reboot>
            <App />
        </Reboot>
    </ThemeProvider>
);

export default Root;