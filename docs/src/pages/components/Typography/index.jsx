import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './typography.md';

const Typography = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                Type: {
                    js: require('./Type').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Typography/Type.jsx', 'utf8')
`
                },
                Align: {
                    js: require('./Align').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Typography/Align.jsx', 'utf8')
`
                },
                Color: {
                    js: require('./Color').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Typography/Color.jsx', 'utf8')
`
                },
                Mapper: {
                    js: require('./Mapper').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Typography/Mapper.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default Typography;