import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import cn from 'classnames';
import injectSheets from 'react-jss';
import { capitalize } from 'react-rainbow';

const styles = theme => ({
    root: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    colorPromary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    button: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});

const Link = props => {
    const {
        classes,
        className,
        nav,
        color,
        ...other
    } = props;

    const Component = nav ? NavLink : ReactRouterLink;
    return (
        <Component 
            className={cn(
                classes.root,
                {
                    [classes[`color${capitalize(color)}`]]: color !== 'default',
                },
                className,
            )}
            {...other} 
        />
    );
};

Link.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    nav: PropTypes.bool,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    color: PropTypes.string,
};

Link.defaultProps = {
    nav: false,
    color: 'default',
};

export default injectSheets(styles)(Link);