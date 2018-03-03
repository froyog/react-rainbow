import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow';
import injectSheets from 'react-jss';

const styles = theme => ({
    space: {
        marginRight: theme.spacer,
    },
});

const ButtonFlatDemo = props => {
    const { classes } = props;
    return (
        <div>
            <Button className={classes.space} elevate="flat" color="default">DEFAULT</Button>
            <Button className={classes.space} elevate="flat" color="primary">PRIMARY</Button>
            <Button className={classes.space} elevate="flat" color="secondary">SECONDARY</Button>
            <Button className={classes.space} elevate="flat" color="primary" disabled>DISABLED</Button>
        </div>
    );
};

ButtonFlatDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonFlatDemo);