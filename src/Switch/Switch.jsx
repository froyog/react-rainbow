import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { RippleContainer } from '../Ripple';
import Typography from '../Typography';
import { lighten } from '../styles/colorUtils';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    wrapper: {
        cursor: 'pointer',
        width: 62, 
        height: 48,
        position: 'relative',
        display: 'inline-block',
    },
    wrapperDisabled: {
        cursor: 'default',
    },
    guide: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 34,
        height: 14,
        borderRadius: 7,
        margin: 'auto',
        backgroundColor: 'rgba(34, 31, 31, .26)',
        transition: 'background .15s ease',
        willChange: 'background',
    },
    guideActive: {
        backgroundColor: lighten(theme.colors.primary, .7),
    },
    guideDisabled: {
        backgroundColor: 'rgba(0, 0, 0, .12)',
    },
    toggleWrapper: {
        position: 'relative',
        display: 'block',
        width: 48,
        height: 48,
        transition: 'transform .15s ease',
        willChange: 'transform',
    },
    toggleWrapperActive: {
        transform: 'translateX(14px)',
        color: theme.colors.primary,
    },
    toggle: {
        position: 'absolute',
        top: 0, 
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
        width: 20,
        borderRadius: '50%',
        margin: 'auto',
        backgroundColor: '#f1f1f1',
        boxShadow: '0 1px 1px rgba(0,0,0,.24), 0 0 1px rgba(0,0,0,.12)',
        transition: 'background .15s ease, box-shadow .15s ease',
        willChange: 'background, box-shadow',
    },
    toggleActive: {
        backgroundColor: theme.colors.primary,
        boxShadow: '0 1px 2px rgba(0,0,0,.36), 0 0 1px rgba(0,0,0,.12)',
    },
    toggleDisabled: {
        backgroundColor: '#bdbdbd',
    },
    label: {
    },
});

const Switch = props => {
    const handleClickSwitch = () => {
        const { active, disabled, onChange } = props;
        if (disabled) {
            return;
        }
        onChange && onChange(!active);
    };

    const { 
        classes, 
        className: classNameInput,
        active,
        disabled,
        label,
        disableRipple,
    } = props;

    return (
        <label
            className={cn(classes.root, classNameInput)}
            onClick={handleClickSwitch}
        >
            <span className={cn(
                classes.wrapper,
                {
                    [classes.wrapperDisabled]: disabled,
                },
            )}>
                <span className={cn(
                    classes.guide,
                    { 
                        [classes.guideActive]: active, 
                        [classes.guideDisabled]: disabled,
                    },
                )}></span>
                <span className={cn(
                    classes.toggleWrapper,
                    { 
                        [classes.toggleWrapperActive]: active, 
                    },
                )}>
                    <span className={cn(
                        classes.toggle,
                        { 
                            [classes.toggleActive]: active,
                            [classes.toggleDisabled]: disabled, 
                        },
                    )}></span>
                    {
                        // not showing ripple when disabled
                        !disabled && !disableRipple &&
                        <RippleContainer center />
                    }
                </span>
            </span>
            {
                label &&
                <Typography 
                    component="span"
                    className={classes.label}
                >
                    {label}
                </Typography>
            }
        </label>
    );
};

Switch.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    disableRipple: PropTypes.bool,
};

export default injectSheet(styles, { inject: ['classes'] })(Switch);