import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import Transition from 'react-transition-group/Transition';

const styles = theme => ({
    wrapper: {
        display: 'block',
        opacity: 1,
        pointerEvents: 'none',
    },
    ripple: {
        width: 50,
        height: 50,
        left: 0,
        top: 0,
        opacity: 0,
        position: 'absolute',
        borderRadius: '50%',
        background: 'currentColor',
    },
    wrapperExiting: {
        opacity: 0,
        animation: 'rainbow-ripple-exit 500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    rippleEntering: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: 'rainbow-ripple-enter 500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '@keyframes rainbow-ripple-enter': {
        '0%': {
            transform: 'scale(0)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
    '@keyframes rainbow-ripple-exit': {
        '0%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        },
    },
});

class Ripple extends React.Component {
    constructor () {
        super();
        this.state = {
            rippleEntering: false,
            wrapperExiting: false,
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleEnter () {
        this.setState({
            rippleEntering: true,
        });
    }

    handleExit () {
        this.setState({
            wrapperExiting: true,
        });
    }

    render () {
        const {
            classes,
            className: classNameInput,
            rippleX,
            rippleY,
            rippleSize,
            ...other,
        } = this.props;
        const { wrapperExiting, rippleEntering } = this.state;

        const style = {
            width: rippleSize,
            height: rippleSize,
            top: rippleY - (rippleSize / 2),
            left: rippleX - (rippleSize / 2),
        };

        return (
            <Transition
                onEnter={this.handleEnter}
                onExit={this.handleExit}
                {...other}
            >
                <span className={cn(
                    classes.wrapper,
                    {
                        [classes.wrapperExiting]: wrapperExiting,
                    },
                    classNameInput,
                )}>
                    <span 
                        className={cn(
                            classes.ripple,
                            {
                                [classes.rippleEntering]: rippleEntering,
                            },
                        )} 
                        style={style} 
                    />
                </span>
            </Transition>
        );
    }
}

Ripple.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    timeout: PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number,
    }),
    in: PropTypes.bool,
    rippleX: PropTypes.number.isRequired,
    rippleY: PropTypes.number.isRequired,
    rippleSize: PropTypes.number.isRequired,
};

Ripple.defaultProps = {
    
};

export default injectSheet(styles, { inject: ['classes'] })(Ripple);