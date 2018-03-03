import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets } from 'react-rainbow'

const styles = theme => ({
    root: {
        padding: '70px 0 30px',
        backgroundColor: '#2c2d2f',
    },
});

const Footer = props => {
    const { classes } = props;
    return (
        <footer className={classes.root}>

        </footer>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Footer);