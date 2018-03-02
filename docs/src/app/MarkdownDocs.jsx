import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Demo from './Demo';
import injectSheets from 'react-jss';
import { getSlice } from '../utils';

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
    const { content, classes, demos } = props;
    const markdownSlice = getSlice(content);

    return (
        <article>
            {
                markdownSlice.map((slice, i) => {
                    if (/\[DEMO\]\((.*)\)/.test(slice)) {
                        let result = /\[DEMO\]\((.*)\)/.exec(slice);
                        const { js, raw } = demos[result[1]];
                        return (
                            <Demo 
                                key={i}
                                js={js}
                                raw={raw}
                            />
                        );
                    }
                    return (
                        <div 
                            key={i}
                            className={classes.root}
                            dangerouslySetInnerHTML={{ __html: marked(slice) }}
                        />
                    );
                })
            }
        </article>
    );
};

MarkdownDocs.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};

export default injectSheets(styles)(MarkdownDocs);