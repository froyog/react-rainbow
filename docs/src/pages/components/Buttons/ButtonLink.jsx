import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, injectSheets } from 'react-rainbow';

const styles = theme => ({
    space: {
        marginRight: theme.spacer,
    },
});

const ButtonLinkDemo = props => {
    const { classes } = props;
    return (
        <div>
            <Button 
                className={classes.space}
                component={Link} 
                to="/react"
                color="default"
            >
                SOME LINK
            </Button>
            <Button 
                className={classes.space}
                component={Link} 
                to="/react/docs/getting-started/installation"
                color="primary"
            >
                ANOTHER LINK
            </Button>
        </div>
    );
};

ButtonLinkDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonLinkDemo);