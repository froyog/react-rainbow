import React from 'react';
import { shallowWithTheme } from '../util-test';

import ListItem from './ListItem';
import Ripple, { RippleContainer } from '../Ripple';

describe('<ListItem />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<ListItem />);
        expect(wrapper.dive().name()).toBe('li');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(<ListItem className="test-class" />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });

    test('prop: withBorder', () => {
        const wrapper = shallowWithTheme(<ListItem withBorder />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.withBorder)).toBe(true);
    });

    test('prop: disabled', () => {
        const wrapper = shallowWithTheme(<ListItem disabled />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.disabled)).toBe(true);
    });

    test('prop: ripple', () => {
        const wrapper = shallowWithTheme(<ListItem ripple />);
        expect(wrapper.dive().contains(<RippleContainer />)).toBe(true);
    });

    test('prop: component', () => {
        const wrapper = shallowWithTheme(<ListItem component="div" />);
        expect(wrapper.dive().name()).toBe('div');
    });

    test('spreading custom props', () => {
        const wrapper = shallowWithTheme(<ListItem data-custom="test" />);
        expect(wrapper.dive().prop('data-custom')).toBe('test');
    });
});