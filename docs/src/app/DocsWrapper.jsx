import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Demo from './Demo';
import MarkdownRenderer from './MarkdownRenderer';
import injectSheets from 'react-jss';
import { getSlice } from '../utils';

const styles = theme => ({
    root: {
        marginTop: 50,
    },
});

const DocsWrapper = props => {
    const { content, classes, demos } = props;
    const markdownSlice = getSlice(content);
    
    return (
        <article className={classes.root}>
            {
                markdownSlice.map((slice, i) => {
                    if (/\[DEMO\]\((.*)\)/.test(slice)) {
                        console.log(slice);
                        
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
                    return <MarkdownRenderer key={i} content={slice}/>;
                })
            }
        </article>
    );
};

DocsWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};

export default injectSheets(styles)(DocsWrapper);