import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, ListTextItem } from 'react-rainbow';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
    },
});

const ListDemo = ({ classes }) => {
    return (
        <List 
            title="cast"
            className={classes.root}
        >
            <ListItem withBorder ripple>
                <ListTextItem>Tom Cruise</ListTextItem>
            </ListItem>
            <ListItem ripple>
                <ListTextItem>Harry Styles</ListTextItem>
            </ListItem>
        </List>
    );
};

export default injectSheets(styles)(ListDemo);