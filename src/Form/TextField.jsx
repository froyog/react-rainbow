import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';

// font family
//fullWidth
const styles = theme => ({
    wrapper: {
        margin: `${theme.spacer}px 0`,
        display: 'inline-block',
    },
    root: {
        position: 'relative',
        width: 256,
        height: 48,
        fontSize: 16,
        lineHeight: 1.5,
        backgroundColor: 'transparent',
        cursor: 'auto',
    },
    label: {
        position: 'absolute',
        top: 24,
        zIndex: 1,
        fontWeight: theme.typography.fontWeightNormal,
        fontFamily: theme.typography.fontFamily,
        lineHeight: '22px',
        color: theme.colors.text.muted,
        pointerEvents: 'none',
        userSelect: 'none',
        transformOrigin: 'left top 0px',
        transform: 'scale(1) translate(0, 0)',
        transition: theme.transition.common('.45s'),
    },
    labelFocus: {
        color: theme.colors.primary,
    },
    labelError: {
        color: theme.colors.error,
    },
    labelActive: {
        transform: 'scale(.75) translate(0, -28px)',
    },
    placeholder: {
        position: 'absolute',
        top: 22,
        fontSize: theme.typography.pxToRem(16),
        fontFamily: theme.typography.fontFamily,
        color: theme.colors.text.muted,
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        zIndex: 2,
    },
    fullWidth: {
        width: '100%',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        border: 0,
        margin: 0,
        boxSizing: 'content-box',
        borderBottom: '1px solid #e0e0e0',
        transition: theme.transition.common('.45s'),
    },
    bottomBarColored: {
        borderBottom: `2px solid ${theme.colors.primary}`,
        transform: 'scaleX(0)', 
    },
    bottomBarColoredActive: {
        transform: 'scaleX(1)',
    },
    bottomBarColoredError: {
        borderBottomColor: theme.colors.error,
    },
    input: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 0,
        paddingBottom: 6,
        border: 'none',
        fontSize: theme.typography.pxToRem(16),
        fontFamily: theme.typography.fontFamily,
        lineHeight: 1.15,
        outline: 'none',
        color: theme.colors.text.primary,
        backgroundColor: 'transparent',
        cursor: 'inherit',
        opacity: 1,
        overflow: 'hidden',
        '&:disabled': {
            cursor: 'not-allowed',
            color: 'rgba(0, 0, 0, .57)',
        },
    },
    helper: {
        margin: `0 0 ${theme.spacer}px`,
        fontSize: 12,
        color: theme.colors.text.secondary,
        transition: theme.transition.common('.45s', 'opacity'),
        opacity: 0,
    },
    helperActive: {
        opacity: 1,
    },
    errorMessage: {
        color: theme.colors.error,
    },
});

class TextField extends React.Component {
    constructor () {
        super();
        this.state = {
            isFocus: false,
        };

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputFocus () {
        this.setState({
            isFocus: true,
        });
    }

    handleInputBlur () {
        this.setState({
            isFocus: false,
        });
    }

    handleInputChange (e) {
        const { name, value } = e.target;
        this.props.onChange(name, value);
    }

    render () {
        
        const {
            classes,
            className: classNameInput,
            id,
            value,
            name,
            label,
            type,
            color,
            placeholder,
            fullWidth,
            errorMessage,
            disabled,
            helperText,
            ...other,
        } = this.props;
        const { isFocus } = this.state;
        const hasContent = !!value;
        
        return (
            <div className={cn(
                classes.wrapper,
                { [classes.fullWidth]: fullWidth },
            )}>
                <div className={cn(
                    classes.root,
                    { [classes.fullWidth]: fullWidth },
                    classNameInput,
                )}>
                    <label
                        className={cn(
                            classes.label,
                            {
                                [classes.labelActive]: hasContent || isFocus,
                                [classes.labelFocus]: isFocus,
                                [classes.labelError]: errorMessage,
                            },
                        )} 
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    { placeholder && !hasContent && isFocus &&
                        <div className={classes.placeholder}>
                            {placeholder}
                        </div>
                    }
                    <input
                        className={classes.input}
                        value={value}
                        type={type}
                        name={name}
                        disabled={disabled}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        onChange={this.handleInputChange}
                        {...other}
                    />
                    <div>
                        <hr aria-hidden="true" className={classes.bottomBar} />
                        <hr
                            aria-hidden="true"
                            className={cn(
                                classes.bottomBar,
                                classes.bottomBarColored,
                                {
                                    [classes.bottomBarColoredActive]: isFocus || errorMessage,
                                    [classes.bottomBarColoredError]: errorMessage,
                                },
                            )}
                        />
                    </div>
                </div>
                {
                    (errorMessage || helperText) &&
                    <p className={cn(
                        classes.helper,
                        { 
                            [classes.errorMessage]: errorMessage, 
                            [classes.helperActive]: isFocus || hasContent,
                        },
                    )}>
                        { errorMessage ? errorMessage : helperText }
                    </p>
                }
            </div>
        )
    }
}

TextField.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.oneOf([ 'text', 'password' ]),
    color: PropTypes.oneOf([ 'primary', 'secondary' ]),
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
};

TextField.defaultProps = {
    color: 'primary',
    type: 'text',
};

export default injectSheet(styles, { inject: [ 'classes' ] })(TextField);