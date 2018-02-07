import React from 'react';
import { shallowWithTheme } from '../util-test';

import CardContent from './CardContent';

describe('<CardContent />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <CardContent>
                <p id="t1">Test</p>
            </CardContent>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().name()).toBe('section');
        expect(wrapper.find('#t1').text()).toBe('Test');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
    });
});