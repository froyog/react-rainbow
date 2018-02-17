import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { RippleContainer } from '../Ripple';

const styles = theme => ({
    root: {
        width: 62, 
        height: 48,
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block',
    },
    guide: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 34,
        height: 14,
        borderRadius: 7,
        margin: 'auto',
        backgroundColor: 'rgba(34, 31, 31, .26)',
        transition: 'background .15s ease',
        willChange: 'background',
    },
    guideActive: {
        backgroundColor: '#bbdefb',
    },
    toggleWrapper: {
        position: 'relative',
        display: 'block',
        width: 48,
        height: 48,
        transition: 'transform .15s ease',
        willChange: 'transform',
    },
    toggleWrapperActive: {
        // transform: 'translateX(14px)',
        color: '#2196f3',
    },
    toggle: {
        position: 'absolute',
        top: 0, 
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
        width: 20,
        borderRadius: '50%',
        margin: 'auto',
        background: '#f1f1f1',
        boxShadow: '0 1px 1px rgba(0,0,0,.24), 0 0 1px rgba(0,0,0,.12)',
        transition: 'background .15s ease, box-shadow .15s ease',
        willChange: 'background, box-shadow',
    },
    toggleActive: {
        background: '#2196f3',
        boxShadow: '0 1px 2px rgba(0,0,0,.36), 0 0 1px rgba(0,0,0,.12)',
    }
});

class Switch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            active: props.active || false,
        };

        this.handleClickSwitch = this.handleClickSwitch.bind(this);
    }

    handleClickSwitch () {
        this.setState({
            active: !this.state.active
        });
    }

    render () {
        const { 
            classes, 
            className: classNameInput,
        } = this.props;
        const { active } = this.state;

        return (
            <label
                className={cn(
                    classes.root,
                    classNameInput,
                )}
                onClick={this.handleClickSwitch}
            >
                <span className={cn(
                    classes.guide,
                    { [classes.guideActive]: active, },
                )}>
                </span>
                
                <span className={cn(
                    classes.toggleWrapper,
                    { [classes.toggleWrapperActive]: active, },
                )}>
                    <span className={cn(
                        classes.toggle,
                        { [classes.toggleActive]: active },
                    )}></span>
                    <RippleContainer center />
                </span>
            </label>
        );
    }
};

Switch.propTypes = {
    classes: PropTypes.object.isRequired,
    
};

Switch.defaultProps = {
    
};

export default injectSheet(styles, { inject: ['classes'] })(Switch);