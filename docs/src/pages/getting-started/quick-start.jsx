import React from 'react';
import DocsWrapper from '../../app/DocsWrapper';
import markdown from './quick-start.md';

const QuickStart = () => {
    return <DocsWrapper content={markdown} />;
};

export default QuickStart;