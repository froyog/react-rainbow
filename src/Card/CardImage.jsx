import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = () => {
    return {
        root: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
    };
};


const CardImage = props => {
    const {
        classes,
        className: classNameInput,
        src,
        component: Component,
        ...other
    } = props;

    const className = classNames(
        classes.root,
        classNameInput
    );

    return (
        <Component 
            style={{ backgroundImage: `url(${src})` }}
            className={className}
            {...other}
        />
    );
};

CardImage.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
};

CardImage.defaultProps = {
    component: 'section',
};

export default injectSheet(styles, { inject: ['classes'] })(CardImage);