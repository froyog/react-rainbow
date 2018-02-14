import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
// import Card, { CardContent, CardImage, CardAction } from './Card';
// import Typography from './Typography';
// import demo from './demo.jpeg';
// import { TextField, Textarea } from './Form';
// import { Ripple } from './Ripple';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import { RippleContainer } from './Ripple';



const styles = theme => ({
    button: {
        width: 48,
        height: 48,
        backgroundColor: '#fcfcfc',
        position: 'relative',
        border: 0,
    }
});

class App extends React.Component {
    constructor () {
        super();
        this.state = {
        };
    }

    handleClick () {
    }

    render () {
        const { classes } = this.props;
        return (
            <button 
                className={classes.button}
                onClick={this.handleClick.bind(this)}
            >
                A
                <RippleContainer center />
            </button>
        );
    }
}

export default injectSheet(styles)(App);