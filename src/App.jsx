import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Card, { CardContent, CardImage, CardAction } from './Card';
// import Typography from './Typography';
// import demo from './demo.jpeg';
import { TextField, Textarea } from './Form';


const styles = theme => ({
    card: {
        width: '320px',
    },
    cardImage: {
        height: '200px',
    },
    action: {
        margin: 0,
        marginLeft: 8,
    },
    title: {
        marginBottom: theme.spacer,
        color: '#fff',
    },
});

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            summary: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (name, value) {
        this.setState({
            [name]: value
        });
    }

    handleClick () {
        this.setState({
            error: 'something bad happens',
        })
        
    }

    render () {
        return (
            <Card><CardContent>
                <TextField 
                    text="Your name" 
                    value={this.state.name} 
                    name="name"
                    onChange={this.handleChange} 
                    placeholder={'example@example.com'}
                    errorMessage={this.state.error}
                    helperText="some really important hint"
                />
                <TextField 
                    text="Your email address" 
                    value={this.state.email}
                    name="email" 
                    onChange={this.handleChange} 
                    placeholder={'example@example.com'}
                />
                <Textarea 
                    label="Summary of yourself"
                    value={this.state.summary}
                    name="summary"
                    id="summary"
                    onChange={this.handleChange}
                />
            </CardContent></Card>
        )
    }
}

export default injectSheet(styles)(App);