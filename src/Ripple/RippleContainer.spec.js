import React from 'react';
import { shallowWithTheme, mountWithTheme  } from '../util-test';
import RippleContainer from './RippleContainer';
import { ThemeProvider } from 'theming/dist/cjs';

describe('<RippleContainer />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<RippleContainer />);
        expect(wrapper.dive().name()).toBe('TransitionGroup');
        expect(wrapper.dive().props().component).toBe('span');
    });
    
    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(<RippleContainer className="test-class" />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });
    
    test('aa', () => {
        const wrapper = mountWithTheme(<RippleContainer />);
        wrapper.childAt(0).simulate('mousedown');
    })
});