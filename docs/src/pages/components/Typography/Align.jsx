import React from 'react';
import PropTypes from 'prop-types';
import { Typography, injectSheets } from 'react-rainbow';

const styles = theme => ({
    wrapper: {
        width: '100%',
        '& p': {
            margin: '10px 0',
        },
    }
});

const Type = props => {
    const { classes } = props;
    return (
        <div className={classes.wrapper}>
            <Typography align="center">React Rainbow</Typography>
            <Typography align="left">React Rainbow</Typography>
            <Typography align="right">React Rainbow</Typography>
        </div>
    );
};

Type.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Type);