import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { RippleContainer } from '../Ripple';

const styles = theme => ({
    
});

const ListItem = props => {
    const {
        classes,
        className: classNameInput,
        component: Component,
        children,
        ...other,
    } = props;

    return (
        <Component className={className} {...other}>
            {children}
        </Component>
    )
};

ListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
};

ListItem.defaultProps = {
    component: 'li',
};

export default injectSheet(styles, { inject: ['classes'] })(ListItem);