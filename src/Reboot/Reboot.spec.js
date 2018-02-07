import React from 'react';
import { shallowWithTheme } from '../util-test';

import Reboot from './Reboot';

describe('<Reboot />', () => {
    test('rendering', () => {
        const wrapper = shallowWithTheme(
            <Reboot>
                <div>root</div>
            </Reboot>
        );
        expect(wrapper.dive().name()).toBe('div');
    });
});