import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './reboot.md';

const Reboot = () => {
    return (
        <DocsWrapper content={markdown} />
    );
};

export default Reboot;