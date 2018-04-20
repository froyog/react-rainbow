import React from 'react';
import { shallowWithTheme } from '../util-test';

import ListText from './ListText';

describe('<ListText />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<ListText>test</ListText>);
        expect(wrapper.dive().name()).toBe('div');
        expect(wrapper.dive().childAt(0).childAt(0).text()).toBe('test');
    });
    
    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <ListText 
                className="test-class"
                subtitle="test-subtitle"
            >
                test
            </ListText>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });

    test('rendering with custom classes', () => {
        const wrapper = shallowWithTheme(
            <ListText 
                subtitle="test subtitle"
                customClasses={{
                    subtitle: 'test-subtitle-class',
                    children: 'test-children-class',
                }}
            >
                test
            </ListText>
        ).dive();
        expect(
            wrapper
                .childAt(0)
                .dive()
                .hasClass('test-subtitle-class')
        ).toBe(true);
        expect(
            wrapper
                .childAt(1)
                .dive()
                .hasClass('test-children-class')
        ).toBe(true);
    });
    
    test('spearding custom props', () => {
        const wrapper = shallowWithTheme(
            <ListText data-custom="test">
                test
            </ListText>
        );
        expect(wrapper.dive().prop('data-custom')).toBe('test');
    });

    test('prop: inset', () => {
        const wrapper = shallowWithTheme(<ListText inset>test</ListText>);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.inset));
    });
});