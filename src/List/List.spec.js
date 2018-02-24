import React from 'react';
import { shallowWithTheme } from '../util-test';

import List from './List';

describe('<List />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<List>children</List>);
        expect(wrapper.dive().name()).toBe('ul');
    });
    
    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <List className="test-class">children</List>
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });
    
    test('spearding custom props', () => {
        const wrapper = shallowWithTheme(<List data-test="test">children</List>);
        expect(wrapper.dive().prop('data-test')).toBe('test');
    });
    
    test('prop: component', () => {
        const wrapper = shallowWithTheme(<List component="ol">children</List>);
        expect(wrapper.dive().name()).toBe('ol');
    });
    
    test('prop: customClasses', () => {
        const wrapper = shallowWithTheme(
            <List 
                title="Test"
                customClasses={{
                    title: 'test-title-class',
                }}
            >
                children
            </List>
        );
        expect(
            wrapper
                .dive()
                .childAt(0)
                .hasClass('test-title-class')
        ).toEqual(true);
    });

    test('prop: title', () => {
        const wrapper = shallowWithTheme(<List title="Test">children</List>);
        const classes = wrapper.prop('classes');
        const titleWrapper = wrapper.dive().childAt(0);
        expect(titleWrapper.dive().name()).toBe('Typography');
        expect(titleWrapper.hasClass(classes.title)).toBe(true);
    });
});