import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardContent, injectSheets } from 'react-rainbow';

const styles = theme => ({
    parent: {
        width: 300,
        margin: 0,
    },
    space: {
        margin: '6px 0',
    },
});

const ButtonFlatDemo = props => {
    const { classes } = props;
    return (
        <Card className={classes.parent}>
            <CardContent>
                <Button className={classes.space} color="default" fullWidth>DEFAULT</Button>
                <Button className={classes.space} color="primary" fullWidth>PRIMARY</Button>
            </CardContent>
        </Card>
    );
};

ButtonFlatDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(ButtonFlatDemo);