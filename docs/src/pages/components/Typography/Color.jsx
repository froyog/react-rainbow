import React from 'react';
import PropTypes from 'prop-types';
import { Typography, injectSheets } from 'react-rainbow';

const styles = theme => ({
    wrapper: {
        '& span': {
            display: 'inline',
            margin: 10,
        },
    }
});

const Type = props => {
    const { classes } = props;
    return (
        <div className={classes.wrapper}>
            <Typography component="span" color="primary">Primary</Typography>
            <Typography component="span" color="secondary">Secondary</Typography>
            <Typography component="span" color="textSecondary">Text Secondary</Typography>
            <Typography component="span" color="error">Oops</Typography>
            <Typography component="span" color="inherit">React Rainbow</Typography>
        </div>
    );
};

Type.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Type);