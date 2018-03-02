import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, ListText, Typography } from 'react-rainbow';
import { Link } from 'react-router-dom';

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
    listTitle: {
        ...theme.typography.subtitle,
        padding: `${theme.spacer}px ${theme.spacer * 2}px`,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(0, 0, 0, .5)',
        cursor: 'pointer',
        '&:hover': {
            color: theme.colors.text.secondary,
        },
    },
    listTitleEng: {
        display: 'inline-block',
        fontSize: 14,
        fontWeight: 500,
        paddingLeft: 5,
    },
});

const Nav = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography component="div" type="subtitle" className={classes.listTitle}>
                现在开始<small className={classes.listTitleEng}>Getting Started</small>
                <List>
                    <ListItem component={Link} to="/react/docs/getting-started/installation">
                        Installation
                    </ListItem>
                </List>
            </Typography>
            <Typography component="div" type="subtitle" className={classes.listTitle}>
                组件<small className={classes.listTitleEng}>Components</small>
                <List>
                    <ListItem component={Link} to="/react/docs/components/Button">
                        Button
                    </ListItem>
                    <ListItem component={Link} to="/react/docs/components/Switch">
                        Switch
                    </ListItem>
                    <ListItem component={Link} to="/react/docs/components/List">
                        List
                    </ListItem>
                </List>
            </Typography>
            <Typography component="div" type="subtitle" className={classes.listTitle}>
                定制<small className={classes.listTitleEng}>Customization</small>
            </Typography>
        </div>
    );
};

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Nav);