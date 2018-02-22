import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';

import Switch from './Switch';
import { RippleContainer } from '../Ripple';

describe('<Switch />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<Switch active={false} onChange={() => {}} />);
        expect(wrapper.dive().name()).toBe('label');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <Switch 
                className="test-class"
                label="test-label"
                active={false} 
                onChange={() => {}}
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
        const wrapper = shallowWithTheme(
            <Switch 
                label="test label" 
                active={false} 
                onChange={() => {}}
            />
        );
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
        test('rendering with correct classes', () => {
            const wrapper = shallowWithTheme(
                <Switch 
                    active={false}
                    onChange={() => {}}
                    disabled 
                />
            );
            const classes = wrapper.prop('classes');
            const spanWrapper = wrapper.dive().childAt(0);
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
            const wrapper = shallowWithTheme(
                <Switch 
                    disabled 
                    active={false} 
                    onChange={() => {}}
                />
            );
            expect(wrapper.contains(<RippleContainer />)).toBe(false);
        });

        test('ignoring user interactions', () => {
            const mockOnChange = jest.fn();
            const wrapper = mountWithTheme(
                <Switch 
                    active={false}
                    onChange={mockOnChange}
                    disabled
                />
            );
            wrapper.find('label').simulate('click');
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
    });
    
    describe('click behavior', () => {
        let wrapper;
        const mockOnChange = jest.fn();
        beforeAll(() => {
            wrapper = mountWithTheme(
                <Switch 
                    active={false}
                    onChange={mockOnChange}
                    disableRipple
                />
            );
        });

        test('respecting the passed-in props', () => {
            wrapper.find('label').simulate('click');
            expect(mockOnChange).toBeCalledWith(true);
            wrapper.setProps({ active: true });
            wrapper.find('label').simulate('click');
            expect(mockOnChange).toBeCalledWith(false);
        });
    });
});