import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Card, { CardContent, CardImage, CardAction } from './Card';
// import Typography from './Typography';
// import demo from './demo.jpeg';
import { TextField } from './Form';


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
            email: ''
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
        console.log(this.state);
        
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
                    fullWidth
                />
                <TextField 
                    text="Your email address" 
                    value={this.state.email}
                    name="email" 
                    onChange={this.handleChange} 
                    placeholder={'example@example.com'}
                    fullWidth
                />
                <button onClick={this.handleClick.bind(this)}>jss</button>
            </CardContent></Card>
        )
    }
}

export default injectSheet(styles)(App);