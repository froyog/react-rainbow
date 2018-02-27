import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
    root: {
        position: 'absolute',
        zIndex: 10,
        right: theme.spacer / 2,
    },
});

const ListSecondaryAction = props => {
    const {
        classes,
        className: classNameInput,
        children,
        ...other,
    } = props;
    return (
        <div 
            className={cn(classes.root, classNameInput)}
            {...other}
        >
            {children}
        </div>
    );
};

ListSecondaryAction.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default injectSheet(styles, { inject: ['classes'] })(ListSecondaryAction);