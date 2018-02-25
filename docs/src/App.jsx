import React from 'react';
import { Switch } from '../../src';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            active: false,
        };
    }

    handleClick () {
        this.setState({
            active: !this.state.active
        });
    }

    render () {
        return (
            <Switch
                active={this.state.active}
                onChange={this.handleClick.bind(this)}
            />
        );
    }
}

export default App;