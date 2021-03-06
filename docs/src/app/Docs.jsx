import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import injectSheets from 'react-jss';
import MarkdownFallBack from './MarkdownFallBack';
import NotFound from './NotFound';

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
            <div className={classes.nav}>
                <Nav/>
            </div>
            <div className={classes.content}>
                <Route 
                    path="/react/docs/:directory/:document" 
                    children={({ match }) => {
                        if (!match) return null;
                        const { directory, document } = match.params;
                        if (!directory || !document) return null;
                        try {
                            const Page = require(`react-rainbow-docs/pages/${directory}/${document}`).default;
                            return <Page />;
                        } catch (e) {
                            try {
                                const md = require(`react-rainbow-docs/pages/${directory}/${document}.md`);
                                return <MarkdownFallBack md={md} />;
                            } catch (e) {
                                return <NotFound />;
                            }
                        }
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