import React from 'react';
import PropTypes from 'prop-types';
import MarkdownRenderer from './MarkdownRenderer';
import injectSheets from 'react-jss';
import cn from 'classnames';
import { Typography } from 'react-rainbow';

const styles = theme => ({
    root: {

    },
    demo: {
        padding: 20,
        border: `1px solid ${theme.colors.divider}`, 
    },
    code: {
        '& pre': {
            margin: '0 !important',
            padding: '20px !important',
            backgroundColor: '#2d2d2d',
        },
    },
    title: {
        fontSize: 14,
        marginBottom: 16,
        color: '#aaa',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
});

const Demo = props => {
    const { js: Component, raw, classes } = props;
    return (
        <div>
            <div className={classes.demo}>
                <Typography className={classes.title} type="subtitle">EXAMPLE</Typography>
                <div className={classes.center}>
                    <Component />
                </div>
            </div>
            <MarkdownRenderer className={classes.code} content={'```jsx\n'+raw+'\n```'} />
        </div>
    );
};

Demo.propTypes = {
    classes: PropTypes.object.isRequired,
    js: PropTypes.func.isRequired,
    raw: PropTypes.string.isRequired,
};

export default injectSheets(styles)(Demo);