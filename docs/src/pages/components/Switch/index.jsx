import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './switch.md';

const Typography = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                Switch: {
                    js: require('./Switch').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Switch/Switch.jsx', 'utf8')
`
                },
                Label: {
                    js: require('./Label').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Switch/Label.jsx', 'utf8')
`
                },
                Custom: {
                    js: require('./Custom').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Switch/Custom.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default Typography;