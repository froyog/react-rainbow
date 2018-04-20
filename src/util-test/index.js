import React from 'react';
import { ThemeProvider } from 'react-jss';
import createTheme from '../styles/createTheme';
import { shallow, mount } from 'enzyme';

const theme = createTheme();
// a better and clearer solution by https://github.com/styled-components/jest-styled-components#theming
export const shallowWithTheme = tree => {
    const context = shallow(<ThemeProvider theme={theme} />)
        .instance()
        .getChildContext();
    return shallow(tree, { context });
};

export const mountWithTheme = tree => {
    const context = shallow(<ThemeProvider theme={theme} />)
        .instance()
        .getChildContext();
        
    return mount(shallow(tree, {
		context,
	}).get(0), {
        context,
		childContextTypes: ThemeProvider.childContextTypes,
    });
};