import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import { List, ListItem, Typography } from 'react-rainbow';
import Link from './Link';
import { getNav } from 'react-rainbow-docs/utils/getNav';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',
        height: 'calc(100vh - 50px)',
        borderRight: '1px solid #ececec',
        padding: '50px 40px 0 999px',
        margin: '0 100px 0 -999px',
    },
    listTitle: {
        ...theme.typography.subtitle,
        padding: `${theme.spacer}px ${theme.spacer * 2}px`,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .5)',
        cursor: 'pointer',
    },
    // listTitleEng: {
    //     display: 'inline-block',
    //     fontSize: 14,
    //     fontWeight: 500,
    //     paddingLeft: 5,
    // },
    list: {
        padding: '10px 0',
    },
    link: {
        padding: '5px 0',
        fontWeight: theme.typography.fontWeightNormal,
        fontSize: 16,
    }
});

const Nav = props => {
    const { classes } = props;
    const pages = getNav();
    let renderPages = [];
    // eslint-disable-next-line
    for (let subtitle in pages) {
        const info = pages[subtitle];
        renderPages.push(
            <Typography 
                className={classes.listTitle}
                key={subtitle}
                component="div" 
                type="subtitle" 
            >
                {info.title}
                <List className={classes.list}>
                    {
                        info.links.map((page, i) => (
                            <ListItem 
                                component={Link} 
                                key={i}
                                className={classes.link}
                                to={`/react/docs/${subtitle}/${page}`}
                            >
                                {info.linksTitle[i]}
                            </ListItem>
                        ))
                    }
                </List>
            </Typography>
        );
    }
    return (
        <div className={classes.root}>
            {renderPages}
        </div>
    );
};

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Nav);