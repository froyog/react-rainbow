import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { capitalize } from '../util';


const styles = theme => ({
    root: {
        display: 'block',
        margin: 0,
    },
    'display-1': theme.typography['display-1'],
    'display-2': theme.typography['display-2'],
    'display-3': theme.typography['display-3'],
    'display-4': theme.typography['display-4'],
    title: theme.typography.title,
    subtitle: theme.typography.subtitle,
    body: theme.typography.body,
    bodySmall: theme.typography.bodySmall,
    blockquote: theme.typography.blockquote,
    highlight: theme.typography.highlight,
    colorPrimary: { color: theme.colors.primary },
    colorSecondary: { color: theme.colors.secondary },
    colorError: { color: theme.colors.error },
    colorInherit: { color: 'inherit' },
    alignLeft: { textAlign: 'left' },
    alignCenter: { textAlign: 'center' },
    alignRight: { textAlign: 'right' },
    alignJustify: { textAlign: 'justify' },
});

const Typography = props => {
    const {
        classes,
        className: classNameInput,
        component,
        type,
        color,
        align,
        componentMapper,
        ...other,
    } = props;

    const className = classNames(
        classes.root,
        classes[type],
        {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
            [classes[`align${capitalize(align)}`]]: align !== 'inherit',
        },
        classNameInput,
    );

    // if component not provided,
    // map the type to produce one from the componentMapper
    // which is also customizable
    const Component = component || componentMapper[type];

    return <Component className={className} {...other} />;
};

Typography.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ]),
    type: PropTypes.oneOf([
        'display-1',
        'display-2',
        'display-3',
        'display-4',
        'title',
        'subtitle',
        'body',
        'bodySmall',
        'blockquote',
        'highlight',
    ]),
    align: PropTypes.oneOf([ 'inherit', 'left', 'center', 'right', 'justify' ]),
    color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'error', ]),
    componentMapper: PropTypes.shape({
        'display-1': PropTypes.string,
        'display-2': PropTypes.string,
        'display-3': PropTypes.string,
        'display-4': PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        body: PropTypes.string,
        bodySmall: PropTypes.string,
        blockquote: PropTypes.string,
        highlight: PropTypes.string,
    }),
};

Typography.defaultProps = {
    color: 'default',
    align: 'inherit',
    componentMapper: {
        'display-1': 'h1',
        'display-2': 'h1',
        'display-3': 'h1',
        'display-4': 'h1',
        title: 'h1',
        subtitle: 'h2',
        body: 'p',
        bodySmall: 'p',
        blockquote: 'blockquote',
        highlight: 'mark',
    },
    type: "body",
};

export default injectSheet(styles, { inject: ['classes'] })(Typography);