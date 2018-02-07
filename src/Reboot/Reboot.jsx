import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';


const styles = theme => ({
    '@global': {
        html: {
            boxSizing: 'content-box',
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        body: {
            margin: 0,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            color: theme.colors.text.primary,
            textAlign: 'left',
            backgroundColor: theme.colors.background,
        },
    }    
});

const Reboot = props => (
    props.children
);

Reboot.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,    
};

Reboot.defaultProps = {
    children: null
};

export default injectSheet(styles, { inject: ['classes'] })(Reboot);