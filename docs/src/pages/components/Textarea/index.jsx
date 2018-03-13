import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './textarea.md';

const TextField = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                General: {
                    js: require('./General').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Textarea/General.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default TextField;