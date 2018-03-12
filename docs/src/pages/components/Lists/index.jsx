import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './list.md';

const Lists = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                Simple: {
                    js: require('./Simple').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Lists/Simple.jsx', 'utf8')
`
                },
                Secondary: {
                    js: require('./Secondary').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Lists/Secondary.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default Lists;