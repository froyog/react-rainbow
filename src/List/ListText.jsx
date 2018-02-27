import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import Typography from '../Typography';

const styles = theme => ({
    root: {
        flex: '1 1 auto',
        minWidth: 0,
        padding: '0 16px',
        '&:first-child': {
            paddingLeft: 0,
        },
    },
    inset: {
        '&:first-child': {
            paddingLeft: theme.spacer * 7,
        },
    },
});

const ListTextItem = props => {
    const {
        classes,
        className: classNameInput,
        subtitle,
        children,
        inset,
        customClasses,
        ...other,
    } = props;

    return (
        <div 
            className={cn(
                classes.root,
                { [classes.inset]: inset },
                classNameInput,
            )}
            {...other}
        >
            {
                subtitle &&
                <Typography
                    className={customClasses.subtitle}
                    type="subtitle"
                >
                    {subtitle}
                </Typography>
            }
            <Typography 
                className={customClasses.children}
                type="body"
                color="secondary"
            >
                {children}
            </Typography>    
        </div>
    );
};

ListTextItem.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    subtitle: PropTypes.string,
    customClasses: PropTypes.shape({
        subtitle: PropTypes.string,
        children: PropTypes.string,
    }),
};

ListTextItem.defaultProps = {
    customClasses: {},
};

export default injectSheet(styles, { inject: ['classes'] })(ListTextItem);