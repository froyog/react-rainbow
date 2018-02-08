import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    root: {
        display: 'inline-block',
        position: 'relative',
        width: 256,
        height: 56,
        fontSize: 16,
        lineHeight: 1.5,
        backgroundColor: 'transparent',
        cursor: 'auto',
    },
    label: {
        position: 'absolute',
        top: 22,
        zIndex: 1,
        fontWeight: 'normal',
        lineHeight: '22px',
        pointerEvents: 'none',
        userSelect: 'none',
        transformOrigin: 'left top 0px',
        transform: 'scale(1) translate(0, 0)',
        color: theme.colors.text.muted,
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
        bottom: 15,
        fontSize: 16,
        color: theme.colors.text.muted,
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        zIndex: 2,
    },
    error: {
        position: 'relative',
        bottom: 5,
        fontSize: 12,
        lineHeight: '12px',
        color: theme.colors.error,
    },
    fullWidth: {
        width: '100%',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 8,
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
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        marginTop: 2,
        fontSize: 16,
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
            value,
            name,
            text,
            type,
            color,
            placeholder,
            fullWidth,
            errorMessage,
            disabled,
        } = this.props;
        const { isFocus } = this.state;
        const hasContent = !!value;
        
        return (
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
                    htmlFor={name}
                >
                    {text}
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
                { errorMessage &&
                    <div className={classes.error}>
                        {errorMessage}
                    </div>
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
    text: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.oneOf([ 'text', 'password' ]),
    color: PropTypes.oneOf([ 'primary', 'secondary' ]),
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
};

TextField.defaultProps = {
    color: 'primary',
    type: 'text',
};

export default injectSheet(styles, { inject: [ 'classes' ] })(TextField);