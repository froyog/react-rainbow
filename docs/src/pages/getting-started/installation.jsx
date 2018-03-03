import React from 'react';
import DocsWrapper from '../../app/DocsWrapper';
import markdown from './installation.md';

const Installation = () => {
    return <DocsWrapper content={markdown} />;
};

export default Installation;