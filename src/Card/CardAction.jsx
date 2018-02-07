import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        padding: theme.spacer,
    },
});

const CardAction = props => {
    const {
        classes,
        className: classNameInput,
        component: Component,
        ...other,
    } = props;

    const className = classNames(
        classes.root,
        classNameInput,
    );

    return <Component className={className} {...other} />;
};

CardAction.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
};

CardAction.defaultProps = {
    component: 'section',
};

export default injectSheet(styles, { inject: ['classes'] })(CardAction);