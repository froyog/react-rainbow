import React from 'react';
import { ThemeProvider } from 'react-jss';
import { createTheme, Reboot } from '../../src';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => (
    <Router>
        <ThemeProvider theme={createTheme()}>
            <Reboot>
                <App />
            </Reboot>
        </ThemeProvider>
    </Router>
);

export default Root;