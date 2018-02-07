import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        padding: theme.spacer * 2,
    }
});

const CardContent = props => {
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

    return (
        <Component className={className} {...other} />
    );
};

CardContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
};

CardContent.defaultProps = {
    component: 'section',
};

export default injectSheets(styles, { inject: ['classes'] })(CardContent);