import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
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
    const { classes } = props
    return (
        <div className={classes.root}>
            <Nav className={classes.nav} />
            <div className={classes.content}>GHello</div>
        </div>
    );
};

Docs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Docs);