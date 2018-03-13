import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, RippleContainer } from 'react-rainbow';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: 100,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#e3e3e3',
        },
    },
});

const Simple = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <RippleContainer />
        </div>
    );
};

Simple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Simple);