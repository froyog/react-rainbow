import React from 'react';
import PropTypes from 'prop-types';
import { Button, injectSheets } from 'react-rainbow';

const styles = theme => ({
    space: {
        marginRight: theme.spacer,
    },
});

const ButtonFloatDemo = props => {
    const { classes } = props;
    return (
        <div>
            <Button className={classes.space} elevate="float" color="default">A</Button>
            <Button className={classes.space} elevate="float" color="primary">B</Button>
            <Button className={classes.space} elevate="float" color="secondary">C</Button>
        </div>
    );
};

ButtonFloatDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonFloatDemo);