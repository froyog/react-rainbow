import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../util-test';

import Ripple from './Ripple';

describe('<Ripple />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <Ripple 
                rippleX={0}
                rippleY={0}
                rippleSize={10}
                timeout={{}}
            />
        );
        expect(wrapper.dive().name()).toBe('Transition');
    });
    
    test('rendering with correct classes', () => {
        const wrapper = shallowWithTheme(
            <Ripple 
                rippleX={0}
                rippleY={0}
                rippleSize={10}
                timeout={{}}
            />
        );
        const classes = wrapper.prop('classes');
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
                .hasClass(classes.ripple)
        ).toBe(true);
    });
    
    describe('functionality & behavior', () => {
        let wrapper;
        beforeAll(() => {
            wrapper = mountWithTheme(
                <Ripple 
                    rippleX={0}
                    rippleY={0}
                    rippleSize={10}
                    timeout={{}}
                />
            );
        }); 

        test('start', () => {
            expect(wrapper.state().rippleEntering).toBe(false);
            wrapper.setProps({ in: true });
            wrapper.update();
            expect(wrapper.state().rippleEntering).toBe(true);
            // inner span component should have rippleEntering class
            const spanRippleWrapper = wrapper.find('span').first().childAt(0);
            const classes = wrapper.prop('classes');
            expect(spanRippleWrapper.hasClass(classes.rippleEntering)).toBe(true);
        });

        test('stop', () => {
            wrapper.setProps({ in: false });
            wrapper.update();
            expect(wrapper.state().wrapperExiting).toBe(true);
            const spanWrapper = wrapper.find('span').first();
            const classes = wrapper.prop('classes');
            expect(spanWrapper.hasClass(classes.wrapperExiting)).toBe(true);
        });
    });
});