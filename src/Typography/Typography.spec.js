import React from 'react';
import { shallowWithTheme } from '../util-test';
import { capitalize } from '../util';

import Typography from './Typography';

describe('<Typography />', () => {
    test('rendering text', () => {
        const wrapper = shallowWithTheme(<Typography>Test</Typography>);
        expect(wrapper.dive().text()).toBe('Test');
    });

    test('rendering with custom className', () => {
        const wrapper = shallowWithTheme(<Typography className="test-class">Test</Typography>);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.body)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });

    [
        'display-1',
        'display-2',
        'display-3',
        'display-4',
        'title',
        'subtitle',
        'body',
        'bodySmall',
        'blockquote',
        'highlight',
    ].map(type => {
        test(`rendering with type: ${type}`, () => {
            const wrapper = shallowWithTheme(<Typography type={type}>Test</Typography>);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes[type])).toBe(true);
        });
    });

    ['left', 'center', 'right', 'justify'].map(alignment => {
        test(`rendering with align: ${alignment}`, () => {
            const wrapper = shallowWithTheme(<Typography align={alignment}>Test</Typography>);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes[`align${capitalize(alignment)}`])).toBe(true);
        });
    });
    
    ['primary', 'secondary', 'error'].map(color => {
        test(`rendering with color: ${color}`, () => {
            const wrapper = shallowWithTheme(<Typography color={color}>Test</Typography>);
            const classes = wrapper.prop('classes');
            expect(wrapper.dive().hasClass(classes[`color${capitalize(color)}`])).toBe(true);
        });
    });

    test('rendering with custom mapper', () => {
        const wrapper = shallowWithTheme(
            <Typography 
                componentMapper={{ title: 'h5' }}
                type="title"
            >
                TestTitle
            </Typography>
        );
        expect(wrapper.dive().name()).toBe('h5');
    });
});