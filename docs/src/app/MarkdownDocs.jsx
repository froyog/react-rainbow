import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Demo from './Demo';
import injectSheets from 'react-jss';

const styles = theme => ({
    root: {
        '& h1': {
            ...theme.typography['display-3'],
        },
        '& h2': {
            ...theme.typography['display-4'],
        },
        '& h3': {
            ...theme.typography.title,
        },
        '& h4': {
            ...theme.typography.subtitle,
        },
    },
});


const MarkdownDocs = props => {
    const { content, classes } = props;
    return (
        <article
            className={classes.root}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
    );
};

MarkdownDocs.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};

export default injectSheets(styles)(MarkdownDocs);