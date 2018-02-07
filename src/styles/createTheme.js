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
            normal: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        },
        zIndex: {

        },
        spacer: 8,
    };
};

export default createTheme;