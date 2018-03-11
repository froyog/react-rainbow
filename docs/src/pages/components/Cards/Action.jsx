import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, Card, CardContent, CardAction, Button, Typography } from 'react-rainbow';

const styles = theme => ({
    main: {
        width: 300,
    },
    title: {
        marginBottom: theme.spacer / 2,
    },
});

const Simple = props => {
    const { classes } = props;
    return (
        <Card className={classes.main}>
            <CardContent>
                <Typography className={classes.title} type="title">Shanghai</Typography>
                <Typography>
                    Day reappeared. The tempest still raged with undiminished fury; but the
                    wind now returned to the south-east. It was a foverable change, and the
                    Tankadere again.
                </Typography>
            </CardContent>
            <CardAction>
                <Button elevate="flat" color="primary">TAKE THIS ACTION</Button>
                <Button elevate="flat" color="primary">GIVE UP</Button>
            </CardAction>
        </Card>
    );
};

Simple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Simple);