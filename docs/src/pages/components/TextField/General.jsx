import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, TextField } from 'react-rainbow';

const styles = theme => ({
    root: {
        width: '100%',
        '& > div > div': {
            margin: '0 10px',
        },
    }
});

class General extends React.Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: '',
            placeholder: '',
            disabled: '',
            initialValue: 'Some initial Value',
            helper: '',
            error: '',
            invaildInput: '',
            fullWidth: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    verifyInput (name, value) {
        let errorMessage;
        switch (name) {
            case 'error':
                if (this.state.error) {
                    errorMessage = 'Invaild input';
                }
                break;
            default:
                break;
        }
        this.setState({
            invaildInput: errorMessage,
        });
    }

    handleChange (name, value) {
        this.verifyInput(name, value);
        this.setState({
            [name]: value,
        });
    }

    render () {
        const { classes } = this.props;
        const { 
            username, 
            password, 
            placeholder, 
            disabled, 
            initialValue, 
            helper,
            invaildInput,
            error,
            fullWidth,
        } = this.state;

        return (
            <div className={classes.root}>
                <div>
                    <TextField 
                        label="User Name"
                        id="username"
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                    />
                    <TextField 
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                    />
                    <TextField 
                        label="With placeholder"
                        placeholder="Some important text here"
                        id="placeholder"
                        value={placeholder}
                        name="placeholder"
                        onChange={this.handleChange}
                    />
                    <TextField 
                        label="With Initial Value"
                        id="initialValue"
                        value={initialValue}
                        name="initialValue"
                        onChange={this.handleChange}
                    />
                    <TextField 
                        label="Disabled"
                        placeholder="Some important text here"
                        id="disabled"
                        value={disabled}
                        name="disabled"
                        disabled
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <TextField 
                        label="With helper text"
                        placeholder="Some important text here"
                        helperText="Some important hint"
                        id="helper"
                        value={helper}
                        name="helper"
                        onChange={this.handleChange}
                    />
                    <TextField 
                        label="Error text"
                        placeholder="Some important text here"
                        helperText="Some important hint"
                        error={invaildInput}
                        id="error"
                        value={error}
                        name="error"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <TextField 
                        label="Full width"
                        placeholder="Some important text here"
                        helperText="This text field has a width of 100%"
                        id="fullWidth"
                        value={fullWidth}
                        name="fullWidth"
                        fullWidth
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(General);