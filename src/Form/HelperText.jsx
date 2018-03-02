import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { capitalize } from '../util';

const styles = theme => ({
    root: {
        margin: 0,
        fontSize: theme.typography.pxToRem(12),
        color: theme.colors.text.secondary,
        transition: `opacity .45s ${theme.transitions.ease} 0ms`,
        opacity: 0,
    },
    active: {
        opacity: 1,
    },
    colorError: {
        color: theme.colors.error,
    },
});

const HelperText = props => {
    const {
        classes,
        children,
        color,
        active,
    } = props;

    return (
        <p className={cn(
            classes.root,
            { 
                [classes.active]: active, 
                [classes[`color${capitalize(color)}`]]: color !== 'default',
            },
        )}>
            {children}
        </p>
    );
};

HelperText.propTypes = {
    classes: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    color: PropTypes.string,
};

HelperText.defaultProps = {
    active: false,
    color: 'default',
};

export default injectSheet(styles, { inject: ['classes'] })(HelperText);