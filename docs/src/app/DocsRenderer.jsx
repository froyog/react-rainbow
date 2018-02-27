import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Demo from './Demo';

let renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
    if (text === '{DEMO}') {
        return (
            <Demo path={href}/>
        );
    }
};
marked.setOptions({
    renderer,
});

const DocsRenderer = props => {
    const { content } = props;
    return (
        <article
            dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
    );
};

DocsRenderer.propTypes = {
    content: PropTypes.string.isRequired,
};

export default DocsRenderer;