import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';
import RippleContainer from './RippleContainer';

describe('<RippleContainer />', () => {
    test('rendering correctly', () => {
        const wrapper = shallowWithTheme(<RippleContainer />);
        expect(wrapper.dive().name()).toBe('TransitionGroup');
        expect(wrapper.dive().props().component).toBe('span');
    });
    
    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(<RippleContainer className="test-class" />);
        const classes = wrapper.prop('classes');
        expect(wrapper.dive().hasClass(classes.root)).toBe(true);
        expect(wrapper.dive().hasClass('test-class')).toBe(true);
    });
});

describe('functionality', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = mountWithTheme(<RippleContainer />);
    });

    test('creating unique ripples', () => {
        expect(wrapper.state('nextKey')).toBe(0);
        wrapper.simulate('mousedown');
        expect(wrapper.state('nextKey')).toBe(1);
        wrapper.simulate('mousedown');
        expect(wrapper.state('nextKey')).toBe(2);
    });
})