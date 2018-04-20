import React from 'react';
import DocsWrapper from '../../../app/DocsWrapper';
import markdown from './button.md';

const Button = () => {
    return (
        <DocsWrapper 
            content={markdown} 
            demos={{
                ButtonRaised: {
                    js: require('./ButtonRaised').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonRaised.jsx', 'utf8')
`
                },
                ButtonFlat: {
                    js: require('./ButtonFlat').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonFlat.jsx', 'utf8')                    
`
                },
                ButtonFloat: {
                    js: require('./ButtonFloat').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonFloat.jsx', 'utf8')                    
`
                },
                ButtonSize: {
                    js: require('./ButtonSize').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonSize.jsx', 'utf8')                    
`
                },
                ButtonFullWidth: {
                    js: require('./ButtonFullWidth').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonFullWidth.jsx', 'utf8')                    
`
                },
                ButtonLink: {
                    js: require('./ButtonLink').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Buttons/ButtonLink.jsx', 'utf8')                    
`
                },
            }}
        />
    );
};

export default Button;