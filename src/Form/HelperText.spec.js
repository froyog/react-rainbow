import React from 'react';
import { shallowWithTheme } from '../util-test';

import HelperText from './HelperText';

describe('<HelperText />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <HelperText>
                Some important hint
            </HelperText>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().text()).toBe('Some important hint');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
    });
    test('prop: active', () => {
        const wrapper = shallowWithTheme(<HelperText active>test</HelperText>);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.active)).toBe(true);
    });
});