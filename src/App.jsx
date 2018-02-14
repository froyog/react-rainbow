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
    hero: {
        fontSize: '16px',
        padding: '8px 16px',
        backgroundColor: theme.colors.primary,
        color: 'white',
        border: 0,
        position: 'relative',
        boxShadow: 0,
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
                className={classes.hero}
                onClick={this.handleClick.bind(this)}
            >
                BUTTON
                <RippleContainer />
            </button>
        );
    }
}

export default injectSheet(styles)(App);