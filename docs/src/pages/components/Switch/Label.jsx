import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-rainbow';

class Label extends React.Component {
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
                    label="Primary"
                />
                <Switch
                    active={false}
                    onChange={() => {}}
                    label="Disabled"
                    disabled
                />
            </div>
        );
    }
}

export default Label;