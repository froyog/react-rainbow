import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import marked from 'marked';
import prism from '../utils/prism';

let renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
    if (href.startsWith('/react')) {
        return `<a href="${href}">${text}</a>`;
        
    }
    return `<a href="${href}" target="_blank">${text}</a>`;
};

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    // prism uses the following class prefix.
    langPrefix: 'language-',
    highlight(code, lang) {
        let language;
        switch (lang) {
            case 'bash':
                language = prism.languages.bash;
                break;
            case 'diff':
                language = prism.languages.diff;
                break;
            case 'css':
                language = prism.languages.css;
                break;
            case 'js':
            case 'jsx':
            default:
                language = prism.languages.jsx;
                break;
        }
        return prism.highlight(code, language);
    },
    renderer: renderer,
});

const styles = theme => ({
    root: {
        '& h1': {
            ...theme.typography['display-3'],
            fontWeight: 600,
        },
        '& h2': {
            ...theme.typography['display-4'],
            fontSize: 36,
        },
        '& h3': {
            ...theme.typography.title,
            fontSize: 24,
        },
        '& h4': {
            ...theme.typography.subtitle,
        },
        '& p': {
            ...theme.typography.body,
            fontSize: 16,
        },
        '& code': {
            backgroundColor: 'rgba(255,229,100,0.2)',
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            padding: '2px 4px',
        },
        '& pre code': {
            backgroundColor: 'inherit',
            padding: 0,
        },
        '& li': {
            margin: 5,
            lineHeight: '24px',
        },
        '& blockquote': {
            ...theme.typography.blockquote,
            margin: 0,
        },
        '& a': {
            color: theme.colors.text.primary,
            backgroundColor: 'rgba(187,239,253,0.3)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, .2)',
            '&:hover': {
                borderBottom: '1px solid #1a1a1a',
                backgroundColor: '#bbeffd',
            },
        },
        '& pre': {
            margin: '0 !important',
            padding: '20px !important',
            backgroundColor: '#2d2d2d',
        },
        '& table': {
            width: '100%',
            display: 'block',
            overflowX: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 0,
            overflow: 'hidden',
        },
        '& thead': {
            fontSize: 13,
            fontWeight: theme.typography.fontWeightNormal,
            color: theme.colors.text.secondary,
        },
        '& tbody': {
            fontSize: 13,
            lineHeight: 1.5,
            color: theme.colors.text.primary,
        },
        '& td': {
            borderBottom: `1px solid ${theme.colors.divider}`,
            padding: `${theme.spacer}px ${theme.spacer * 2}px ${theme.spacer}px ${theme.spacer}px`,
            textAlign: 'left',
        },
        '& td:last-child': {
            paddingRight: theme.spacr * 3,
        },
        '& td compact': {
            paddingRight: theme.spacer * 3,
        },
        '& td code': {
            fontSize: 13,
            lineHeight: 1.6,
        },
        '& th': {
            whiteSpace: 'pre',
            borderBottom: `1px solid ${theme.colors.divider}`,
            fontWeight: theme.typography.fontWeightNormal,
            padding: `0 ${theme.spacer * 2}px 0 ${theme.spacer}px`,
            textAlign: 'left',
        },
        '& th:last-child': {
            paddingRight: theme.spacer * 3,
        },
        '& tr': {
            height: 48,
        },
        '& thead tr': {
            height: 64,
        },
    },
});

const MarkdownRenderer = props => {
    const { classes, content, ...other } = props;
    return (
        <div
            className={classes.root}
            dangerouslySetInnerHTML={{ __html: marked(content) }}            
            {...other}
        >
            
        </div>
    );
};

MarkdownRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};

export default injectSheet(styles)(MarkdownRenderer);