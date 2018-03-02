import React from 'react';
import MarkdownDocs from '../../app/MarkdownDocs';
import markdown from './installation.md';

const Installation = () => {
    return <MarkdownDocs content={markdown} />;
};

export default Installation;