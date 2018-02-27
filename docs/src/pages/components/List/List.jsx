import React from 'react';
// import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, ListText, 
    ListSecondaryAction, Switch } from 'react-rainbow';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
    },
});

const ListDemo = ({ classes }) => {
    return (
        <List 
            title="settings"
            className={classes.root}
        >
            <ListItem withBorder ripple>
                <ListText>Wi-Fi</ListText>
                <ListSecondaryAction>
                    <Switch active={false} onChange={() => {}} />
                </ListSecondaryAction>
            </ListItem>
            <ListItem ripple>
                <ListText>Bluetooth</ListText>
                <ListSecondaryAction>
                    <Switch active={true} onChange={() => {}} />
                </ListSecondaryAction>
            </ListItem>
        </List>
    );
};

export default injectSheets(styles)(ListDemo);