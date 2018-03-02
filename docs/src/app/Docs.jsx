import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import MarkdownDocs from './MarkdownDocs';
import injectSheets from 'react-jss';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    nav: {
        flex: '0 0 300px',
    },
    content: {
        flex: '1 1 auto',
    },
});

const Docs = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Nav className={classes.nav} />
            <div className={classes.content}>
                <Route 
                    path="/react/docs/:directory/:document" 
                    children={({ match }) => {
                        if (!match) return null;
                        const { directory, document } = match.params;
                        if (!directory || !document) return null;
                        const Page = require(`react-rainbow-docs/pages/${directory}/${document}`).default;
                        return <Page />;
                    }}
                />
            </div>
        </div>
    );
};

Docs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Docs);