import React from 'react';
import PropTypes from 'prop-types';
import { Button, injectSheets } from 'react-rainbow';

const styles = theme => ({
    space: {
        margin: theme.spacer,
    },
});

const ButtonSizeDemo = props => {
    const { classes } = props;
    return (
        <div>
            <div>
                <Button className={classes.space} color="default" size="small">SMALL</Button>
                <Button className={classes.space} color="default">MEDIUM</Button>
                <Button className={classes.space} color="default" size="large">LARGE</Button>
            </div>
            <div>
                <Button className={classes.space} elevate="flat" color="primary" size="small">SMALL</Button>
                <Button className={classes.space} elevate="flat" color="primary">MEDIUM</Button>
                <Button className={classes.space} elevate="flat" color="primary" size="large">LARGE</Button>
            </div>
            <div>
                <Button className={classes.space} elevate="float" color="default" size="small">A</Button>
                <Button className={classes.space} elevate="float" color="default">B</Button>
            </div>
        </div>
    );
};

ButtonSizeDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonSizeDemo);