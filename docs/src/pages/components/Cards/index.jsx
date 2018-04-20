import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './card.md';

const Card = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                Simple: {
                    js: require('./Simple').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Cards/Simple.jsx', 'utf8')
`
                },
                Media: {
                    js: require('./Media').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Cards/Media.jsx', 'utf8')
`
                },
                Action: {
                    js: require('./Action').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Cards/Action.jsx', 'utf8')
`
                },
                Inverse: {
                    js: require('./Inverse').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Cards/Inverse.jsx', 'utf8')
`
                },
            }}
        />
    );
};

export default Card;