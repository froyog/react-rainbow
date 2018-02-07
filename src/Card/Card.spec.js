import React from 'react';
import { shallowWithTheme } from '../util-test';

import Card from './Card';

describe('<Card />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <Card>
                <p id="t1">Test</p>
            </Card>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().name()).toBe('div');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.find('#t1').text()).toBe('Test');
    });

    test('rendering with custom component', () => {
        const wrapper = shallowWithTheme(<Card component="main" />);
        expect(wrapper.dive().name()).toBe('main');
    });

    test('inversing color', () => {
        const wrapper = shallowWithTheme(<Card inverse />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.inverse)).toBe(true);
    });

    test('spreading custom props', () => {
        const wrapper = shallowWithTheme(<Card data-test="test" />);
        expect(wrapper.prop('data-test')).toBe('test');
    });
});