import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';

import Switch from './Switch';
import { RippleContainer } from '../Ripple';

describe('<Switch />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<Switch />);
        expect(wrapper.dive().name()).toBe('label');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <Switch 
                className="test-class"
                label="test-label"
            />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass("test-class")).toBe(true);
        expect(
            wrapper
                .dive()
                .childAt(0)
                .hasClass(classes.wrapper)
        ).toBe(true);
        expect(
            wrapper
                .dive()
                .childAt(0)
                .childAt(0)
                .hasClass(classes.guide)
        ).toBe(true); 
        expect(
            wrapper
                .dive()
                .childAt(0)
                .childAt(1)
                .hasClass(classes.toggleWrapper)
        ).toBe(true); 
        expect(
            wrapper
                .dive()
                .childAt(0)
                .childAt(1)
                .childAt(0)
                .hasClass(classes.toggle)
        ).toBe(true); 
        expect(
            wrapper
                .dive()
                .childAt(1)
                .dive()
                .dive()
                .hasClass(classes.label)
        ).toBe(true);
    });

    test('prop: label', () => {
        const wrapper = shallowWithTheme(<Switch label="test label" />);
        expect(
            wrapper
                .dive()
                .childAt(1)
                .dive()
                .dive()
                .text()
        ).toBe('test label');
    });

    describe('prop: disabled', () => {
        let wrapper;
        beforeAll(() => {
            wrapper = mountWithTheme(<Switch disabled />);
        });
        
        test('render with correct classes', () => {
            const shallowWrapper = shallowWithTheme(<Switch disabled />);
            const classes = shallowWrapper.prop('classes');
            const spanWrapper = shallowWrapper.dive().childAt(0);
            expect(spanWrapper.hasClass(classes.wrapperDisabled)).toBe(true);
            expect(
                spanWrapper
                    .childAt(0)
                    .hasClass(classes.guideDisabled)
            ).toBe(true);
            expect(
                spanWrapper
                    .childAt(1)
                    .childAt(0)
                    .hasClass(classes.toggleDisabled)
            ).toBe(true);
        });
        
        test('rendering without Ripples', () => {
            expect(wrapper.contains(<RippleContainer />)).toBe(false);
        });

        test('ignoring user interactions', () => {
            expect(wrapper.state().active).toBe(false);
            const labelWrapper = wrapper.find('label');
            labelWrapper.simulate('click');
            expect(wrapper.state().active).toBe(false);
        });
    });
    
    // describe('click behavior', () => {
    //     let wrapper;
    //     beforeAll(() => {
    //         wrapper = mountWithTheme(<Switch active/>);
    //     });

    //     test('respecting the passed-in props', () => {
    //         expect(wrapper.state().active).toBe(true);
    //     });
    // });
});