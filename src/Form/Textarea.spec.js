import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';

import Textarea from './Textarea';

describe('<Textarea />', () => {
    let wrapper, classes;
    beforeAll(() => {
        wrapper = shallowWithTheme(
            <Textarea 
                className="test-class"
                value=""
                onChange={() => {}}
                label="label"
                id="test"
            />
        );
        classes = wrapper.prop('classes');
    });

    test('rendering correctly', () => {
        expect(wrapper.find('textarea')).toBeTruthy();
    });

    test('rendering with correct classes', () => {
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
        expect(
            wrapper
                .dive()
                .childAt(0)
                .hasClass(classes.textarea)
        ).toBe(true);
        expect(
            wrapper
                .dive()
                .childAt(1)
                .hasClass(classes.label)
        ).toBe(true);
    });

    test('prop: fullWidth', () => {
        wrapper.setProps({ fullWidth: true });
        expect(wrapper.dive().hasClass(classes.fullWidth)).toBe(true);
    });

    test('prop: disabled', () => {
        const disabledWrapper = shallowWithTheme(
            <Textarea 
                value=""
                onChange={() => {}}
                label="label"
                id="test"
                disabled
            />
        );
        expect(
            disabledWrapper
                .dive()
                .find('textarea')
                .prop('disabled')
        ).toBe(true);
    });

    test('spreading custom props', () => {
        wrapper.setProps({ customProp: 'test' });
        expect(wrapper.prop('customProp')).toBe('test');
    });

    test('appling custom classes to textarea & label', () => {
        wrapper.setProps({
            customClasses: {
                textarea: 'test-textarea-class',
                label: 'test-label-class',
            },
        });
        expect(wrapper.dive().find('textarea').hasClass('test-textarea-class')).toBe(true);
        expect(wrapper.dive().find('label').hasClass('test-label-class')).toBe(true);
    });

    describe('event behavior', () => {
        let wrapper, classes;
        const mockOnChange = jest.fn();
        beforeAll(() => {
            wrapper = mountWithTheme(
                <Textarea 
                    value=""
                    onChange={mockOnChange}
                    label="label"
                    id="test"
                />
            );
            classes = wrapper.prop('classes');
        });

        test('handling value change', () => { 
            wrapper.find('textarea').simulate('change');
            expect(mockOnChange).toBeCalled();
        });

        test('handling focus & blur', () => {
            wrapper.find('textarea').simulate('focus');
            expect(wrapper.childAt(0).hasClass(classes.textareaColored)).toBe(true);
            expect(wrapper.find('textarea').hasClass(classes.textareaColored)).toBe(true);
            expect(wrapper.find('label').hasClass(classes.labelFocus)).toBe(true);
            wrapper.find('textarea').simulate('blur');
            expect(wrapper.childAt(0).hasClass(classes.textareaColored)).toBe(false);
            expect(wrapper.find('textarea').hasClass(classes.textareaColored)).toBe(false);
            expect(wrapper.find('label').hasClass(classes.labelFocus)).toBe(false);
        });
    });
});