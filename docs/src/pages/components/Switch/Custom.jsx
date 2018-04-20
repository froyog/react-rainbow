import React from 'react';
import PropTypes from 'prop-types';
import { Switch, injectSheets } from 'react-rainbow';

const styles = theme => ({
    toggleActive: {
        backgroundColor: '#009688',
    },
    toggleWrapperActive: {
        color: '#009688',
    },
    guideActive: {
        backgroundColor: '#80cbc4',
    },
});

class Custom extends React.Component {
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
        const { classes } = this.props;
        return (
            <Switch
                customClasses={{
                    toggleActive: classes.toggleActive,
                    toggleWrapperActive: classes.toggleWrapperActive,
                    guideActive: classes.guideActive
                }}
                active={this.state.active}
                onChange={this.handleClick.bind(this)}
                label="Teal Color"
            />
        );
    }
}

Custom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Custom);