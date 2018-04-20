import React from 'react';
import PropTypes from 'prop-types';
import DocsWrapper from './DocsWrapper';

const MarkdownFallBack = ({ md }) => <DocsWrapper content={md} />;

MarkdownFallBack.propTypes = {
    md: PropTypes.string.isRequired,
};

export default MarkdownFallBack;