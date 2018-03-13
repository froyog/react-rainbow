import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, RippleContainer } from 'react-rainbow';

const styles = theme => ({
    root: {
        position: 'relative',
        width: 100,
        height: 100,
        textAlign: 'center',
        color: theme.colors.primary,
        border: '1px solid #d0d0d0',
        boxShadow: theme.shadows.normal,
    },
});

const Simple = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <RippleContainer center />
        </div>
    );
};

Simple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Simple);