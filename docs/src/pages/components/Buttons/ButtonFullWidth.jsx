import React from 'react';
import PropTypes from 'prop-types';
import { Button, injectSheets } from 'react-rainbow';

const styles = theme => ({
    parent: {
        width: 300,
        backgroundColor: '#f5f5f5',
        border: '1px solid #e3e3e3',
        padding: 20,
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
    },
    space: {
        margin: '6px 0',
    },
});

const ButtonFlatDemo = props => {
    const { classes } = props;
    return (
        <div className={classes.parent}>
            <Button className={classes.space} color="default" fullWidth>DEFAULT</Button>
            <Button className={classes.space} color="primary" fullWidth>PRIMARY</Button>
        </div>
    );
};

ButtonFlatDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonFlatDemo);