const empty = /^\s*$/;

/**
 * Slice markdown content into an array depending on the location
 * of any existing demos
 * 
 * @param {string} content - Raw markdown content
 * @return {array} - Markdown sliced by demos marker
 */
export const getSlice = content =>
    content
        .split(/^{{|}}$/gm)
        .filter(content => !empty.test(content));