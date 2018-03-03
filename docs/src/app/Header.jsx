import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import injectSheets from 'react-jss';
import { Typography } from 'react-rainbow';


const styles = theme => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        zIndex: 1000,
        borderBottom: '1px solid #ececec',
        backgroundColor: '#fff',
    },
    content: {
        maxWidth: 1200,
        margin: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    linkGroup: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        height: '100%',
        cursor: 'pointer',
        '& > li': {
            padding: `0 ${theme.spacer}px`,
            fontSize: 16,
            height: '100%',
            lineHeight: '50px',
            '&:hover > a': {
                opacity: 1,
            },
        },
    },
    link: {
        color: theme.colors.text.primary,
        opacity: .5,
        textDecoration: 'none',
        transition: `opacity .3s ${theme.transitions.ease} 0ms`,
        willChange: 'opacity',
    },
    linkActive: {
        opacity: 1,
    },
});

const Home = props => {
    const { classes } = props;
    return (
        <header className={classes.root}>
            <div className={classes.content}>
                <Typography 
                    type="title"
                >
                    React Rainbow
                </Typography>
                <ul className={classes.linkGroup}>
                    <li><NavLink 
                        exact
                        to="/react" 
                        className={classes.link}
                        activeClassName={classes.linkActive}
                    >
                        主页
                    </NavLink></li>
                    <li><NavLink 
                        to="/react/docs" 
                        className={classes.link}
                        activeClassName={classes.linkActive}
                    >
                        文档
                    </NavLink></li>
                    <li><a 
                        href="https://github.com/froyog/react-rainbow" 
                        target="_blank"
                        className={classes.link}
                    >
                        GitHub
                    </a></li>
                </ul>
            </div>
        </header>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Home);