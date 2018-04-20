import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { RippleContainer } from '../Ripple';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        WebkitTapHighlightColor: 'transparent',
        color: 'inherit',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        textDecoration: 'none',
        '&::-moz-focus-inner': {
            borderStyle: 'none', // Remove Firefox dotted outline.
        },
    },
    disabled: {
        pointerEvents: 'none',
        cursor: 'default',
    },
});

const ButtonBase = props => {
    const {
        classes,
        className: classNameInput,
        centerRipple,
        children,
        component: Component,
        disabled,
        disableRipple,
        ...other,
    } = props;

    return (
        <Component
            className={cn(
                classes.root,
                {
                    [classes.disabled]: disabled,
                },
                classNameInput,
            )}
            disabled={disabled}
            {...other}
        >
            {children}
            {
                !disableRipple && !disabled &&
                <RippleContainer center={centerRipple} />
            }
        </Component>
    );
};

ButtonBase.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    centerRipple: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
    children: PropTypes.node,
    disableRipple: PropTypes.bool,
    disabled: PropTypes.bool,
};

ButtonBase.defaultProps = {
    type: 'button',
    component: 'button',
};

export default injectSheet(styles, { inject: ['classes'] })(ButtonBase);