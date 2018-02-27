import React from 'react';
import { shallowWithTheme } from '../util-test';

import ListSecondaryAction from './ListSecondaryAction';

describe('<ListSecondaryAction />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(
            <ListSecondaryAction>test</ListSecondaryAction>
        );
        expect(wrapper.dive().name()).toBe('div');
        expect(wrapper.dive().text()).toBe('test');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <ListSecondaryAction className="test-class">
                test
            </ListSecondaryAction>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });
    
    test('spearding custom props', () => {
        const wrapper = shallowWithTheme(
            <ListSecondaryAction data-custom="test">
                test
            </ListSecondaryAction>
        );
        expect(wrapper.dive().prop('data-custom')).toBe('test');
    });
});