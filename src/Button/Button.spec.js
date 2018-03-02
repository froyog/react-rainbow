import React from 'react';
import { shallowWithTheme } from '../util-test';

import Button from './Button';

describe('<Button />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<Button>test</Button>);
        expect(wrapper.dive().dive().name()).toBe('ButtonBase');
    });

    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(<Button className="test-class" />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });

    test('spreading custom props', () => {
        const wrapper = shallowWithTheme(<Button data-custom="test" />);
        expect(wrapper.prop('data-custom')).toBe('test');
    });

    test('prop: fullWidth', () => {
        const wrapper = shallowWithTheme(<Button fullWidth />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.fullWidth)).toBe(true);
    });

    test('passing disableRipple prop to <ButtonBase>', () => {
        const wrapper = shallowWithTheme(<Button disableRipple />);
        expect(
            wrapper
                .dive()
                .dive()
                .prop('disableRipple')
        ).toBe(true);
    });
    
    describe('prop: disabled', () => {
        test('rendering diabled classes correctly', () => {
            const wrapper = shallowWithTheme(<Button disabled />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.disabled)).toBe(true);
        });
        
        test('passing disabled prop to <ButtonBase>', () => {
            const wrapper = shallowWithTheme(<Button disabled />);
            expect(
                wrapper
                    .dive()
                    .dive()
                    .prop('disabled')
            ).toBe(true);
        });
    });

    describe('prop: elevate', () => {
        test('rendering with raised prop by default', () => {
            const wrapper = shallowWithTheme(<Button />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.raised)).toBe(true);
        });

        test('rendering flat button correctly', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.root)).toBe(true);
            expect(wrapper.dive().hasClass(classes.raised)).toBe(false);
        });
        
        test('rendering float button corectly', () => {
            const wrapper = shallowWithTheme(<Button elevate="float" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.root)).toBe(true);
            expect(wrapper.dive().hasClass(classes.float)).toBe(true);
        });
    });

    describe('prop: size', () => {
        test('medium', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(false);
            expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(false);
        });

        test('large', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" size="large" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(true);
            expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(false);            
        });
        
        test('small', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" size="small" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(false);
            expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(true);            
        });
        
        describe('float button sizing', () => {
            test('medium', () => {
                const wrapper = shallowWithTheme(<Button elevate="float" />);
                const classes = wrapper.prop('classes');
                expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(false);
                expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(false);            
            });

            test('small', () => {
                const wrapper = shallowWithTheme(<Button elevate="float" size="small" />);
                const classes = wrapper.prop('classes');
                expect(wrapper.dive().hasClass(classes.floatMini)).toBe(true);
                expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(false);
                expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(false);            
            });
            
            test('large: ignoring', () => {
                const wrapper = shallowWithTheme(<Button elevate="float" size="large" />);
                const classes = wrapper.prop('classes');
                expect(wrapper.dive().hasClass(classes.sizeLarge)).toBe(false);
                expect(wrapper.dive().hasClass(classes.sizeSmall)).toBe(false);            
            });
        });
    });

    describe('prop: color', () => {
        test('raised default', () => {
            const wrapper = shallowWithTheme(<Button />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(false);
        });

        test('raised primary', () => {
            const wrapper = shallowWithTheme(<Button color="primary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(true);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(false);
        });
        
        test('raised primary', () => {
            const wrapper = shallowWithTheme(<Button color="secondary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(true);
        });

        test('flat default', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.flatPrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.flatSecondary)).toBe(false);
        });

        test('flat primary', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" color="primary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.flatPrimary)).toBe(true);
            expect(wrapper.dive().hasClass(classes.flatSecondary)).toBe(false);
        });

        test('flat secondary', () => {
            const wrapper = shallowWithTheme(<Button elevate="flat" color="secondary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.flatPrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.flatSecondary)).toBe(true);
        });
        
        test('float default', () => {
            const wrapper = shallowWithTheme(<Button elevate="float" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(false);
        });

        test('float primary', () => {
            const wrapper = shallowWithTheme(<Button elevate="float" color="primary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(true);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(false);
        });

        test('float secondary', () => {
            const wrapper = shallowWithTheme(<Button elevate="float" color="secondary" />);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes.elevatePrimary)).toBe(false);
            expect(wrapper.dive().hasClass(classes.elevateSecondary)).toBe(true);
        });
    });
});