import createTypography from './createTypography';
import createColorPalette from './createColorPalette';

const createTheme = (customTheme = {}) => {
    const {
        colors: customColors = {},
        typography: customTypography = {},
    } = customTheme;

    const colors = createColorPalette(customColors);
    
    return {
        colors,
        typography: createTypography(colors, customTypography),
        shadows: {
            none: 'none',
            normal: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            hover: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
            raised: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
            float: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            raisedDeep: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)'
        },
        zIndex: {

        },
        transitions: {
            ease: 'cubic-bezier(.23, 1, .32, 1)',
        },
        spacer: 8,
    };
};

export default createTheme;