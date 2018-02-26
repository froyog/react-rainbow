import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import Typography from '../Typography';

const styles = theme => ({
    root: {
        position: 'relative',
        padding: `${theme.spacer * 2} 0`,
        margin: 0,
        listStyle: 'none',
    },
    titleProvided: {
        paddingTop: 0,
    },
    title: {
        padding: `0 ${theme.spacer * 2}`,
        lineHeight: '48px',
        fontWeight: theme.typography.fontWeightHeavy,
        listStyle: 'none',
    },
});

const List = props => {
    const {
        classes,
        className: classNameInput,
        component: Component,
        children,
        title,
        customClasses,
        ...other,
    } = props;

    return (
        <Component 
            className={cn(
                classes.root,
                {
                    [classes.titleProvided]: title,
                },
                classNameInput,
            )} 
            {...other}
        >
            { title &&
                <Typography 
                    component="li"
                    type="body"
                    className={cn(
                        classes.title,
                        customClasses.title
                    )}
                >
                    {title}
                </Typography>
            }
            {children}
        </Component>
    );
};

List.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
    title: PropTypes.string,
    customClasses: PropTypes.shape({
        title: PropTypes.string,
    }),
};

List.defaultProps = {
    component: 'ul',
    customClasses: {},
};

export default injectSheet(styles, { inject: ['classes'] })(List);