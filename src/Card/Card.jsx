import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { getContrastTextOf } from '../styles/colorUtils';

const styles = theme => ({
    root: {
        boxShadow: theme.shadows.normal,
        marginBottom: theme.spacer * 3,
        borderRadius: 2,
        backgroundColor: '#fff',
    },
    inverse: {
        backgroundColor: theme.colors.primary,
        color: getContrastTextOf(
            theme.colors.primary,
            theme.colors.text.primary,
            theme.colors.common.white
        ),
    },
});

const Card = props => {
    const { 
        classes, 
        className: classNameInput, 
        component: Component, 
        inverse,
        ...other 
    } = props;

    const className = classNames(
        classes.root,
        classNameInput,
        {
            [classes.inverse]: inverse,
        },
    );

    return <Component className={className} {...other} />;
};

Card.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    inverse: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ])
};

Card.defaultProps = {
    component: 'div',
};

export default injectSheet(styles, { inject: ['classes'] })(Card);