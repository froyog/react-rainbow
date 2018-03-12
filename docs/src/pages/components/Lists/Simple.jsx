import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, List, ListItem, ListText } from 'react-rainbow';

const styles = theme => ({
    list: {
        width: 300,
        backgroundColor: '#fff',
    },
});

const Simple = props => {
    const { classes } = props;
    return (
        <List 
            className={classes.list}
            title="Title"
        >
            <ListItem ripple>
                <ListText>Inbox</ListText>
            </ListItem>
            <ListItem ripple>
                <ListText>Draft</ListText>
            </ListItem>
        </List>
    );
};

Simple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Simple);