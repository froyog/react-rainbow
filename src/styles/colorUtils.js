/**
 * Converts a hex color to RGB color
 * 
 * @param {string} hex - CSS color in hex, one of: #nnn, #nnnnnn
 * @returns {string} A CSS RGB color
 */
export const hexToRGB = hex => {
    if (hex.charAt(0) !== '#') {
        throw new Error('invaild hex color, must starts with #');
    }
    // get rid of the #
    hex = hex.substr(1);

    const re = new RegExp(`.{1,${hex.length / 3}}`, 'g');
    let colors = hex.match(re);

    if (!colors || colors.length !== 3) {
        throw new Error('invaild hex color input');
    }
    // convert #nnn to #nnnnnn
    if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
    }

    return `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})`;
};

/**
 * 
 * Converts a RGB color to hex color
 * 
 * @param {string} RGB - A CSS RGB color
 * @returns {string} CSS hex color 
 */
export const RGBToHex = rgb => {
    const re = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    const rgbColors = re.exec(rgb).slice(1, 4);
    let hexString = '';
    for (let color of rgbColors) {
        const colorDec = +color;
        if (colorDec > 255 || colorDec < 0 || typeof colorDec !== 'number') {
            throw new Error('invaild rgb color type!');
        }
        
        let hex = colorDec.toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        hexString += hex;
    }
    // shorter
    if (hexString[0] === hexString[1] && 
        hexString[2] === hexString[3] && 
        hexString[4] === hexString[5]
    ) {
        return `#${hexString[1]}${hexString[3]}${hexString[5]}`;
    }
    return `#${hexString}`;
};

/**
 * Converts a css color to a color object
 * 
 * @param {string} color - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 * @returns {object} - { type, values: number[] }
 */
export const decompose = color => {
    if (color.charAt(0) === '#') {
        return decompose(hexToRGB(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    let values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(value => parseFloat(value));
    return { type, values };
};

/**
 * Converts a color object to plain CSS color string
 * 
 * @param {object} colorObject - { type, values: number[] }
 * @param {string} colorObject.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'. Otherwise throw
 * @param {array} color.values - [n, n, n] or [n, n, n, n]
 * @returns {string} A color object
 */
export const recompose = colorObject => {
    let { type, values } = colorObject;
    if (type.indexOf('rgb') !== -1) {
        // not converting alpha (the fourth value)
        values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    } else {
        throw new Error('unknown type');
    }

    return `${type}(${values.join(', ')})`;
};

/**
 * Set transparency of a given color
 * 
 * @param {string} color - CSS color, one of: #nnn, #nnnnnn, rgb, rgba, hsl, hsla
 * @param {number} alpha - alpha to set
 * @returns {string} - CSS color in rgba or hsla form
 */
export const setAlpha = (color, alpha) => {
    if (!color) {
        throw new Error('missing argument: color');
    }
    if (!alpha) {
        throw new Error('missing argument: multiplier');
    }

    color = decompose(color);
    let { type, values } = color;
    if (type === 'rgb' || type === 'hsl') {
        type += 'a';
    }
    values[3] = alpha;
    return recompose({ type, values });
};

/** 
 * Lightens a color
 * 
 * @param {string} color - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 * @param {number} multiplier - reflects the degree of lightening the given color
 * @returns {string} CSS color in rgb form (hex if possible)
*/
export const lighten = (color, multiplier) => {
    if (!color) {
        throw new Error('missing argument: color');
    }
    if (!multiplier) {
        throw new Error('missing argument: multiplier');
    }

    color = decompose(color);
    if (color.type.indexOf('hsl') !== -1) {
        // hsl or hsla
        color.values[2] += (100 - color.values[2]) * multiplier;
    } else if (color.type.indexOf('rgb') > -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (255 - color.values[i]) * multiplier;
        }
    }

    if (color.type === 'rgb') {
        return RGBToHex(recompose(color));
    }
    return recompose(color);
};

/**
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * 
 * @param {string} color - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 * @returns {number} The relative brightness
 */
export const getLuminance = color => {
    if (!color) {
        throw new Error('missing arguments: color');
    }

    const decomposedColor = decompose(color);
    if (decomposedColor.type.indexOf('rgb' > -1)) {
        const rgb = decomposedColor.values.map(val => {
            val /= 255; // normalized
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    } else if (decomposedColor.type.indexOf('hsl') > -1) {
        return decomposedColor.values[2] / 100;
    }
};

/**
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * 
 * @param {string} foreground - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 * @param {string} background - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 */
export const getContrastRatio = (foreground, background) => {
    const foreLuminance = getLuminance(foreground);
    const backLuminance = getLuminance(background);
    return (Math.max(foreLuminance, backLuminance) + 0.05) / (Math.min(foreLuminance, backLuminance) + 0.05);
};

/**
 * Get the contrast text given the background color
 * 
 * @param {string} background - CSS color, one of: #nnn, #nnnnnn, rgb, hsl, rgba, hsla
 * @param {string} darkText - theme.colors.text.primary
 * @param {string} lightText - theme.colors.common.white
 * @returns {string} One of dark text and light text
 */
export const getContrastTextOf = (background, darkText, lightText) => {
    const contrastText = (getContrastRatio(background, darkText) >= 5.5)
        ? darkText
        : lightText;
    
    return contrastText;
};