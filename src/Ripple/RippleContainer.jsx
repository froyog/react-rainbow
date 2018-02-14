import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Ripple from './Ripple';


const styles = theme => ({
    root: {
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        overflow: 'hidden',
        borderRadius: 'inherit',
        zIndex: 0,
    },
});
const DURATION = 550;
const DELAY = 80;

class RippleContainer extends React.Component {
    constructor () {
        super();
        this.state = {
            rippleArray: [],
            nextKey: 0,
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }

    handleMouseDown (e) { this._prepareStart(e); }

    handleMouseUp (e) { this._stop(e); }

    handleMouseLeave (e) { this._stop(e); }

    handleTouchStart (e) { this._prepareStart(e); }

    handleTouchEnd (e) { this._stop(e); }

    handleTouchMove (e) { this._stop(e); }

    _prepareStart (e = {}, options = {}, cb) {
        const center = this.props.center;

        const element = ReactDOM.findDOMNode(this);
        const rect = element
            ? element.getBoundingClientRect()
            : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            };
        
        
        let rippleX, rippleY, rippleSize;
        if (
            center ||
            (e.clientX === 0 && e.clientY === 0) ||
            (!e.clientX && !e.touches)
        ) {
            // place the ripple in the center of the rect
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
        } else {
            const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
            const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
            rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
            if (rippleSize % 2 === 0) {
                rippleSize += 1;
            }
        } else {
            const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
            const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
            rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        }

        // Execute
        if (e.touches) {
            // delay the ripple effect for touch devices
            this.startWrapper = () => {
                this._start({ rippleX, rippleY, rippleSize });
            }
            this.startTimeout = setTimeout(() => {
                this.startWrapper();
                this.startWrapper = null;
            }, DELAY);
        } else {
            this._start({ rippleX, rippleY, rippleSize });
        }
    }

    _start (params) {
        const { rippleX, rippleY, rippleSize } = params;
        let rippleArray = this.state.rippleArray;

        rippleArray = [
            ...rippleArray,
            <Ripple 
                timeout={{
                    enter: DURATION,
                    exit: DURATION,
                }}
                key={this.state.nextKey}
                rippleX={rippleX}
                rippleY={rippleY}
                rippleSize={rippleSize}
            />
        ];

        this.setState({
            rippleArray: rippleArray,
            nextKey: this.state.nextKey + 1,
        });
    }

    _stop (e) {
        clearTimeout(this.startTimeout);
        const { rippleArray } = this.state;

        if (e.type === 'touchend' && this.startWrapper) {
            e.persist();
            this.startWrapper();
            this.startWrapper = null;
            this.startTimeout = setTimeout(() => {
                this._stop(e);
            }, 0);
            return;
        }

        this.startWrapper = null;

        if (rippleArray && rippleArray.length) {
            this.setState({
                rippleArray: rippleArray.slice(1),
            });
        }
    }

    render () {
        const {
            classes,
            className: classNameInput,
            ...other,
        } = this.props;

        return (
            <TransitionGroup
                className={cn(
                    classes.root,
                    classNameInput,
                )}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                onTouchMove={this.handleTouchMove}
                component="span"
                enter
                exit
                {...other}
            >
                {this.state.rippleArray}
            </TransitionGroup>
        );
    }
};

RippleContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    center: PropTypes.bool,
};

RippleContainer.defaultProps = {
    
};

export default injectSheet(styles, { inject: ['classes'] })(RippleContainer);