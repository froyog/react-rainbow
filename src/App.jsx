import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Switch from './Switch';
// import Card, { CardContent, CardImage, CardAction } from './Card';
// import Typography from './Typography';
// import demo from './demo.jpeg';
// import { TextField, Textarea } from './Form';
// import { Ripple } from './Ripple';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// import { RippleContainer } from './Ripple';



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
            active: false
        };
    }

    handleSwitchChange (active) {
        this.setState({
            active: active
        });
    }

    render () {
        return (
            <div>
                <Switch
                    active={this.state.active}
                    onChange={this.handleSwitchChange.bind(this)}
                    label={this.state.active ? 'Primary' : 'Secondary'}
                />
            </div>
        );
    }
}

export default injectSheet(styles)(App);