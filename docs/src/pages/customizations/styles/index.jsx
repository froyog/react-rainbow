import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './styles.md';

const Styles = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                CustomClasses: {
                    js: require('./CustomClasses').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/customizations/styles/CustomClasses.jsx', 'utf8')
`
                },
                ClassOverriding: {
                    js: require('./ClassOverriding').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/customizations/styles/ClassOverriding.jsx', 'utf8')
`                   
                }
            }}
        />
    );
};

export default Styles;