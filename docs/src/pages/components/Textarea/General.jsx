import React from 'react';
import PropTypes from 'prop-types';
import { Textarea } from 'react-rainbow';

class General extends React.Component {
    constructor () {
        super();
        this.state = {
            intro: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (name, value) {
        this.setState({
            [name]: value
        });
    }

    render () {
        const { value } = this.state;
        return (
            <Textarea 
                value={value}
                name="intro"
                id="intro"
                label="A breif intrduction"
                onChange={this.handleChange}
            />
        );
    }
}

export default General;