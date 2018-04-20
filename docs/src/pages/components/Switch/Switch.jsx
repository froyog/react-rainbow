import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-rainbow';

class SwitchDemo extends React.Component {
    constructor () {
        super();
        this.state = {
            active: true,
        };
    }

    handleClick () {
        this.setState({
            active: !this.state.active
        });
    }

    render () {
        return (
            <div>
                <Switch
                    active={this.state.active}
                    onChange={this.handleClick.bind(this)}
                />
                <Switch
                    active={false}
                    onChange={() => {}}
                    disabled
                />
            </div>
        );
    }
}

export default SwitchDemo;