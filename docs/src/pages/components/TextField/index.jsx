import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './textfield.md';

const TextField = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                General: {
                    js: require('./General').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/TextField/General.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default TextField;