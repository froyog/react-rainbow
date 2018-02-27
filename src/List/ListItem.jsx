import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { RippleContainer } from '../Ripple';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
        padding: `12px ${theme.spacer * 2}px`,
    },
    disabled: {
        opacity: .5,
    },
    withBorder: {
        borderBottom: '1px solid #f1f1f1',
    },
});

const ListItem = props => {
    const {
        classes,
        className: classNameInput,
        component: Component,
        children,
        withBorder,
        disabled,
        ripple,
        ...other,
    } = props;

    return (
        <Component 
            className={cn(
                classes.root,
                {
                    [classes.withBorder]: withBorder,
                    [classes.disabled]: disabled,
                },
                classNameInput,
            )} 
            {...other}
        >
            {children}
            {
                ripple &&
                <RippleContainer />
            }
        </Component>
    );
};

ListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
    withBorder: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
};

ListItem.defaultProps = {
    component: 'li',
};

export default injectSheet(styles, { inject: ['classes'] })(ListItem);