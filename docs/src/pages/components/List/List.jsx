import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, ListText } from 'react-rainbow';

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
                <ListText>Tom Cruise</ListText>
            </ListItem>
            <ListItem ripple>
                <ListText>Harry Styles</ListText>
            </ListItem>
        </List>
    );
};

export default injectSheets(styles)(ListDemo);