import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow';
import injectSheets from 'react-jss';

const styles = theme => ({
    space: {
        marginRight: theme.spacer,
    },
});

const ButtonRaisedDemo = props => {
    const { classes } = props;
    return (
        <div>
            <Button className={classes.space} color="default">DEFAULT</Button>
            <Button className={classes.space} color="primary">PRIMARY</Button>
            <Button className={classes.space} color="secondary">SECONDARY</Button>
            <Button className={classes.space} color="primary" disabled>DISABLED</Button>
        </div>
    );
};

ButtonRaisedDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonRaisedDemo);