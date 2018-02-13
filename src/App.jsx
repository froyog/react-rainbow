import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
// import Card, { CardContent, CardImage, CardAction } from './Card';
// import Typography from './Typography';
// import demo from './demo.jpeg';
// import { TextField, Textarea } from './Form';
import { Ripple } from './Ripple';
import TransitionGroup from 'react-transition-group/TransitionGroup';



const styles = theme => ({
    hero: {
        width: '100%',
        height: 500,
        backgroundColor: '#f0f0f0',
    }
});

class App extends React.Component {
    constructor () {
        super();
        this.state = {
        };
    }

    handleClick () {
        console.log('down');
        
    }

    render () {
        const { classes } = this.props;
        return (
            <div 
                className={classes.hero}
                onMouseDown={this.handleClick}
            >
                
            </div>
        );
    }
}

export default injectSheet(styles)(App);