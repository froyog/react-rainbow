import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-rainbow';

class SwitchDemo extends React.Component {
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

export default SwitchDemo;