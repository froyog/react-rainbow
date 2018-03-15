import React from 'react';
import PropTypes from 'prop-types';
import { Button, injectSheets } from 'react-rainbow';

const styles = theme => ({
    custom: {
        background: 'linear-gradient(90deg,#05d5ee,#0081e5)',
        color: '#fff',
        padding: '10px 30px',
        borderRadius: 20,
    },
});

const ButtonRaisedDemo = props => {
    const { classes } = props;
    return (
        <Button 
            classes={{
                elevatePrimary: classes.custom,
            }}
            color="primary"    
        >
            CUSTOM BUTTON!
        </Button>
    );
};

ButtonRaisedDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonRaisedDemo);