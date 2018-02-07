import React from 'react';
import { shallowWithTheme } from '../util-test';

import CardImage from './CardImage';

describe('<CardImage />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(<CardImage src="./test.png" />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
    });

    test('rendering specified image', () => {
        const wrapper = shallowWithTheme(<CardImage src="./test.png" />);
        expect(wrapper.dive().prop('style').backgroundImage).toBe('url(./test.png)');
    });
    
    test('rendering custom component', () => {
        const wrapper = shallowWithTheme(<CardImage src="./test.png" component="div" />);
        expect(wrapper.dive().name()).toBe('div');
    });

    test('rendering with custom styles', () => {
        const wrapper = shallowWithTheme(
            <CardImage 
                src="./foo.png" 
                style={{ backgroundImage: 'url(./bar.png)' }} 
            />
        );
        expect(wrapper.dive().prop('style').backgroundImage).toBe('url(./bar.png)');
    });
});