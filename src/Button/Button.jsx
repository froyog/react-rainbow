import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import ButtonBase from './ButtonBase';
import { setAlpha, lighten } from '../styles/colorUtils';
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
        transition: `background-color .3s ${theme.transitions.ease} 0ms`,
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: setAlpha(theme.colors.text.primary, .12),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
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
        backgroundColor: theme.colors.chill,
        boxShadow: theme.shadows.normal,
        '&:hover': {
            boxShadow: theme.shadows.hover,
            backgroundColor: lighten(theme.colors.chill, .1),
            '@media (hover: none)': {
                backgroundColor: theme.colors.chill,
            },
        },
        '&:active': {
            boxShadow: theme.shadows.raised,
        },
    },
    raisedPrimary: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.common.white,
        '&:hover': {
            backgroundColor: lighten(theme.colors.primary, .1),
            '@media (hover: none)': {
                backgroundColor: theme.colors.primary,
            },
        },
    },
    raisedSecondary: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.common.white,
        '&:hover': {
            backgroundColor: lighten(theme.colors.secondary, .1),
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
            boxShadow: theme.shadows.deepRaised,
        },
    },
    fullWidth: {
        width: '100%',
    },
});

const Button = props => {
    const {
        classes,
        className: classNameInput,
        color,
        disabled,
        elevate,
        fullWidth,
        children,
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
                    [classes[elevate]]: elevate !== 'flat',
                    [classes[elevate + capitalize(color)]]: color !== 'default',
                },
                classNameInput,
            )}
            {...other}
        >
            {children}
        </ButtonBase>
    );
};

Button.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'primary', 'secondary', 'inherit', 'default' ]),
    disabled: PropTypes.bool,
    elevate: PropTypes.oneOf([ 'flat', 'float', 'raised' ]),
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    elevate: 'raised',
    color: 'default',
};

export default injectSheet(styles, { inject: ['classes'] })(Button);