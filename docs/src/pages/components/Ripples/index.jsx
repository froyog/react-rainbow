import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './ripples.md';

const Ripples = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                Container: {
                    js: require('./Container').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Ripples/Container.jsx', 'utf8')
`
                },
                Center: {
                    js: require('./Center').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Ripples/Center.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default Ripples;