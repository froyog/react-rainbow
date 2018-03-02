import React from 'react';

const Demo = props => {
    const { js: Component, raw } = props;
    return (
        <div>
            <pre>
                <code>{raw}</code>
            </pre>
            <Component />
        </div>
    );
};

export default Demo;