import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import ButtonBase from './ButtonBase';
import { setAlpha, lighten, getContrastTextOf } from '../styles/colorUtils';
import { capitalize } from '../util';

const styles = theme => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightHeavy,
        textTransform: 'uppercase',
        lineHeight: '1.4em',
        boxSizing: 'border-box',
        padding: `${theme.spacer}px ${theme.spacer * 2}px`,
        borderRadius: 2,
        color: theme.colors.text.primary,
        willChange: 'background-color, box-shadow',
        transition: `background-color .3s ${theme.transitions.ease} 0ms, box-shadow .3s ${theme.transitions.ease} 0ms`,
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: setAlpha(theme.colors.text.primary, .12),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
            '&$disabled': {
                backgroundColor: 'transparent',
            }
        },
    },
    flatPrimary: {
        color: theme.colors.primary,
        '&:hover': {
            backgroundColor: setAlpha(theme.colors.primary, .12),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    flatSecondary: {
        color: theme.colors.secondary,
        '&:hover': {
            backgroundColor: setAlpha(theme.colors.secondary, .12),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    raised: {
        color: getContrastTextOf(theme.colors.chill, theme.colors.text.primary, theme.colors.common.white),
        backgroundColor: theme.colors.chill,
        boxShadow: theme.shadows.normal,
        '&$disabled': {
            boxShadow: theme.shadows.none,
            backgroundColor: theme.colors.action.disabled,
        },
        '&:hover': {
            boxShadow: theme.shadows.hover,
            backgroundColor: lighten(theme.colors.chill, .2),
            '@media (hover: none)': {
                backgroundColor: theme.colors.chill,
            },
            'disabled': {
                backgroundColor: theme.colors.action.disabled,
            },
        },
        '&:active': {
            boxShadow: theme.shadows.raised,
        },
    },
    elevatePrimary: {
        backgroundColor: theme.colors.primary,
        color: getContrastTextOf(theme.colors.primary, theme.colors.text.primary, theme.colors.common.white),
        '&:hover': {
            backgroundColor: lighten(theme.colors.primary, .2),
            '@media (hover: none)': {
                backgroundColor: theme.colors.primary,
            },
        },
    },
    elevateSecondary: {
        backgroundColor: theme.colors.secondary,
        color: getContrastTextOf(theme.colors.secondary, theme.colors.text.primary, theme.colors.common.white),
        '&:hover': {
            backgroundColor: lighten(theme.colors.secondary, .2),
            '@media (hover: none)': {
                backgroundColor: theme.colors.secondary,
            },
        },
    },
    float: {
        borderRadius: '50%',
        padding: 0,
        width: 56,
        height: 56,
        fontSize: 24,
        boxShadow: theme.shadows.float,
        '&:hover': {
            boxShadow: theme.shadows.raised,
        },
        '&:active': {
            boxShadow: theme.shadows.raisedDeep,
        },
    },
    floatMini: {
        width: 40,
        height: 40,
    },
    fullWidth: {
        width: '100%',
    },
    sizeSmall: {
        padding: `${theme.spacer - 2}px ${theme.spacer}px`,
        fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1),
    },
    sizeLarge: {
        padding: `${theme.spacer}px ${theme.spacer * 3}px`,
        fontSize: theme.typography.pxToRem(theme.typography.fontSize + 1),
    },
    disabled: {
        color: theme.colors.text.muted,
    },
});

const Button = props => {
    const {
        classes,
        className: classNameInput,
        children,
        color,
        disabled,
        elevate,
        fullWidth,
        size,
        ...other,
    } = props;

    return (
        <ButtonBase
            className={cn(
                classes.root,
                {
                    [classes.fullWidth]: fullWidth,
                    [classes.disabled]: disabled,
                    // elevate prop is defaulted to 'raised', not 'flat'
                    // but 'flat' type has no classes other than root
                    [classes[elevate]]: elevate !== 'flat',
                    [classes[`flat${capitalize(color)}`]]: color !== 'default' && elevate === 'flat',
                    // 'float' and 'raised' share the same color scheme
                    [classes[`elevate${capitalize(color)}`]]: (
                        color !== 'default' && 
                        elevate === 'float' || elevate === 'raised'
                    ),
                    // 'float' only respond to medium and small
                    [classes[`size${capitalize(size)}`]]: (
                        size !== 'medium' && elevate !== 'float'
                    ),
                    [classes.floatMini]: elevate === 'float' && size === 'small',
                },
                classNameInput,
            )}
            disabled={disabled}
            {...other}
        >
            {children}
        </ButtonBase>
    );
};

Button.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    elevate: PropTypes.oneOf([ 'flat', 'float', 'raised' ]),
    color: PropTypes.oneOf([ 'primary', 'secondary', 'inherit', 'default' ]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
};

Button.defaultProps = {
    elevate: 'raised',
    color: 'default',
    size: 'medium',
    fullWidth: false,
    disabled: false,
    diableRipple: false,
};

export default injectSheet(styles, { inject: ['classes'] })(Button);