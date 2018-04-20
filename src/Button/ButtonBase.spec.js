import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';
import { RippleContainer } from '../Ripple';

import ButtonBase from './ButtonBase';

describe('<ButtonBase />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase>test</ButtonBase>
        );
        expect(wrapper.dive().name()).toBe('button');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase className="test-class" />
        );
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });

    test('spreading custom props', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase data-custom="test" />
        );
        expect(wrapper.dive().prop('data-custom')).toBe('test');
    });

    test('prop: component', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase component="Link" />
        );
        expect(wrapper.dive().name()).toBe('Link');
    });

    test('prop: centerRipple', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase centerRipple>test</ButtonBase>
        );
        expect(
            wrapper
                .dive()
                .childAt(1)
                .prop('center')
        ).toBe(true);
    });

    test('prop: disableRipple', () => {
        const wrapper = shallowWithTheme(
            <ButtonBase disableRipple />
        );
        expect(wrapper.dive().contains(<RippleContainer />)).toBe(false);
    });

    describe('prop: disabled', () => {
        let wrapper, classes;
        const mockOnClick = jest.fn();
        beforeAll(() => {
            wrapper = mountWithTheme(
                <ButtonBase 
                    disabled 
                    onClick={mockOnClick}
                />
            );
            classes = wrapper.prop('classes');
        });

        test('rendering correctlt', () => {
            expect(wrapper.childAt(0).hasClass(classes.disabled)).toBe(true);
            expect(wrapper.contains(<RippleContainer />)).toBe(false);
        });

        test('click behavior', () => {
            wrapper.childAt(0).simulate('click');
            expect(mockOnClick).toHaveBeenCalledTimes(0);
        });
    });
});