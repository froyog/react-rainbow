import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

const styles = theme => ({
    
});

class Ripple extends React.Component {
    render () {
        const {
            classes,
            className: classNameInput,
            rippleX,
            rippleY,
            rippleSize,
            ...other,
        } = this.props;

        const style = {
            width: rippleSize,
            height: rippleSize,
            top: rippleY - (rippleSize / 2),
            left: rippleX - (rippleSize / 2),
        };

        return (
            <Transition>
                <span style={style} />
            </Transition>
        )
    }
}

Ripple.propTypes = {
    classes: PropTypes.object.isRequired,
    
};

Ripple.defaultProps = {
    
};

export default injectSheet(styles, { inject: ['classes'] })(Ripple);