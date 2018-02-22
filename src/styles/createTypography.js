import deepmerge from 'deepmerge';

const createTypography = (colors, customTypography) => {
    const {
        fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontSize = 14,
        fontWeightLight = 300,
        fontWeightNormal = 400,
        fontWeightHeavy = 500,
        ...other
    } = customTypography;

    const pxToRem = px => {
        if (typeof px !== 'number' || !Number.isInteger(px)) {
            throw new Error('argument must be an interger');
        }
        return `${px / 16}rem`;
    };

    return deepmerge({
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightNormal,
        fontWeightHeavy,
        'display-1': {
            fontFamily,
            fontSize: pxToRem(88),
            fontWeight: fontWeightLight,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        'display-2': {
            fontFamily,
            fontSize: pxToRem(72),
            fontWeight: fontWeightLight,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        'display-3': {
            fontFamily,
            fontSize: pxToRem(56),
            fontWeight: fontWeightLight,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        'display-4': {
            fontFamily,
            fontSize: pxToRem(40),
            fontWeight: fontWeightLight,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        title: {
            fontFamily,
            fontSize: pxToRem(21),
            fontWeight: fontWeightHeavy,
            lineHeight: 1.1,
            color: colors.text.primary,
        },
        subtitle: {
            fontFamily,
            fontSize: pxToRem(18),
            fontWeight: fontWeightNormal,
            lineHeight: 1.1,
            color: colors.text.primary,
        },
        body: {
            fontFamily,
            fontSize: pxToRem(14),
            fontWeight: fontWeightNormal,
            lineHeight: 1.5,
            color: colors.text.primary,
        },
        bodySmall: {
            fontFamily,
            fontSize: pxToRem(14),
            fontWeight: fontWeightNormal,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        blockquote: {
            fontFamily,
            fontSize: pxToRem(20),
            fontWeight: fontWeightNormal,
            padding: '8px 16px',
            borderLeft: '4px solid #ececec',
            marginBottom: 16,
            lineHeight: 1.5,
            color: colors.text.secondary,
        },
        highlight: {
            fontFamily,
            fontSize: pxToRem(16),
            fontWeight: fontWeightNormal,
            lineHeight: 1.5,
            color: colors.text.primary,
            backgroundColor: '#fcf8e3',
        }
    }, other);
};

export default createTypography;