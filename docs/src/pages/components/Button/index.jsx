import React from 'react';
import MarkdownDocs from '../../../app/MarkdownDocs';
import markdown from './button.md';

const Button = () => {
    return (
        <MarkdownDocs 
            content={markdown} 
            demos={{
                ButtonColor: {
                    js: require('./ButtonColor').default,
                    raw: preval`
module.exports = require('fs')
    .readFileSync('docs/src/pages/components/Button/ButtonColor.jsx', 'utf8')
`
                }
            }}
        />
    );
};

export default Button;