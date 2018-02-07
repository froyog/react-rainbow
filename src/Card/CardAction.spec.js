import React from 'react';
import { shallowWithTheme } from '../util-test';

import CardAction from './CardAction';

describe('<CardAction />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <CardAction>
                <p id="t1">Test</p>
            </CardAction>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().name()).toBe('section');
        expect(wrapper.find('#t1').text()).toBe('Test');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
    });
});