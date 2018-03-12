import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, List, ListItem, ListText, ListSecondaryAction, Switch } from 'react-rainbow';

const styles = theme => ({
    list: {
        width: 360,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
    },
});

class Secondary extends React.Component{
    constructor () {
        super();
        this.state = {
            checkedA: true,
            checkedB: false,
            checkedC: false,
        };
    }

    handleCheck (token) {
        this.setState({
            [`checked${token}`]: !this.state[`checked${token}`],
        });
    }

    render () {
        const { checkedA, checkedB, checkedC } = this.state;
        const { classes } = this.props;
        return (
            <List 
                className={classes.list}
                title="settings"
            >
                <ListItem>
                    <ListText customClasses={{children: classes.text}}>Wi-Fi</ListText>
                    <ListSecondaryAction>
                        <Switch active={checkedA} onChange={this.handleCheck.bind(this, 'A')} />
                    </ListSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListText customClasses={{children: classes.text}}>Bluetooth</ListText>
                    <ListSecondaryAction>
                        <Switch active={checkedB} onChange={this.handleCheck.bind(this, 'B')} />
                    </ListSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListText customClasses={{children: classes.text}}>Airplane mode</ListText>
                    <ListSecondaryAction>
                        <Switch active={checkedC} onChange={this.handleCheck.bind(this, 'C')} />
                    </ListSecondaryAction>
                </ListItem>
            </List>
        );
    }
};

Secondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Secondary);