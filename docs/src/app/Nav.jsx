import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, ListText } from 'react-rainbow';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',
        height: 'calc(100vh - 50px)',
        borderRight: '1px solid #ececec',
        paddingLeft: 999,
        paddingRight: 40,
        paddingTop: 50,
        marginLeft: -999,
        marginRight: 100,
    },
});

const Nav = props => {
    const { classes } = props;
    return (
        <List component="nav" className={classes.root}>
            <ListItem>Getting Started</ListItem>
            <ListItem>Components</ListItem>
            <ListItem>Utils</ListItem>
            <ListItem>Custom</ListItem>
        </List>
    )
};

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Nav);