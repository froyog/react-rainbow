import React from 'react';
import { ThemeProvider } from 'react-jss';
import createTheme from '../styles/createTheme';
import { shallow } from 'enzyme';

export const shallowWithTheme = (children, options) => {
    const theme = createTheme();
    const wrapper = shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
    const instance = wrapper.instance();
    if (options) return wrapper.shallow({ context: {
        ...instance.getChildContext(),
        ...options.context
    } });
    return wrapper.shallow({ context: instance.getChildContext() });
};