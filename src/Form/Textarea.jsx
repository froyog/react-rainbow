import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    root: {
        position: 'relative',
        display: 'inline-block',
        margin: `${theme.spacer}px 0`,
        borderRadius: 4,
        border: `1px solid ${theme.colors.text.primary}`,
        overflow: 'hidden',
    },
    fullWidth: {
        width: '100%',
        display: 'block',
    },
    textarea: {
        display: 'block',
        width: '100%',
        margin: 0,
        padding: theme.spacer * 2,
        paddingTop: theme.spacer * 4,
        border: '1px solid transparent',
        borderRadius: 2,
        fontSize: theme.typography.pxToRem(16),
        fontFamily: theme.typography.fontFamily,
        color: theme.colors.text.primary,
        cursor: 'text',
        outline: 0,
        '&:disabled, &:disabled + $label': {
            backgroundColor: '#f9f9f9',
            cursor: 'not-allowed',
        },
    },
    textareaColored: {
        borderColor: theme.colors.primary,
    },
    label: {
        position: 'absolute',
        top: 18,
        left: 1,
        right: 'initial',
        bottom: 'auto',
        padding: theme.spacer,
        margin: `${theme.spacer / 4}px 0 0 ${theme.spacer}px`,
        fontSize: theme.typography.pxToRem(16),
        fontFamily: theme.typography.fontFamily,
        color: theme.colors.text.muted,
        backgroundColor: theme.colors.common.white,
        lineHeight: 1.15,
        transformOrigin: 'left top',
        transition: `all .3s ${theme.transitions.ease} 0ms`,
        cursor: 'text',
    },
    labelActive: {
        transform: 'translateY(-50%) scale(0.932)',
    },
    labelFocus: {
        color: theme.colors.primary,
    },
});

class Textarea extends React.Component {
    constructor () {
        super();
        this.state = {
            isFocus: false,
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus () {
        this.setState({
            isFocus: true,
        });
    }

    handleBlur () {
        this.setState({
            isFocus: false,
        });
    }

    handleChange (e) {
        const { value, name } = e.target;
        this.props.onChange(name, value);
    }

    render () {
        const {
            classes,
            className: classNameInput,
            value,
            id,
            label,
            name,
            cols,
            rows,
            fullWidth,
            disabled,
            customClasses,
            ...other,
        } = this.props;
        const { isFocus } = this.state;
        const hasContent = !!value;

        return (
            <div 
                className={cn(
                    classes.root,
                    {
                        [classes.textareaColored]: isFocus,
                        [classes.fullWidth]: fullWidth,
                    },
                    classNameInput,
                )}
                {...other}
            >
                <textarea 
                    id={id}
                    value={value}
                    className={cn(
                        classes.textarea,
                        {
                            [classes.textareaColored]: isFocus,
                        },
                        customClasses.textarea,
                    )}
                    name={name} 
                    cols={cols} 
                    rows={rows}
                    disabled={disabled}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
                <label
                    htmlFor={id}
                    className={cn(
                        classes.label,
                        {
                            [classes.labelActive]: isFocus || hasContent,
                            [classes.labelFocus]: isFocus,
                        },
                        customClasses.label
                    )}
                >
                    {label}
                </label>
            </div>
        );
    }
}

Textarea.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    cols: PropTypes.number,
    rows: PropTypes.number,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    customClasses: PropTypes.shape({
        label: PropTypes.string,
        textarea: PropTypes.textarea,
    })
};

Textarea.defaultProps = {
    cols: 40,
    rows: 8,
    customClasses: {},
};

export default injectSheet(styles, { inject: ['classes'] })(Textarea);