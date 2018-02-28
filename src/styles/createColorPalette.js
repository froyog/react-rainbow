const createColorPalette = customColorPalette => {
    return {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: '#00a1e9',
        secondary: '#6200ee',
        chill: '#e0e0e0',
        error: '#d9534f',
        text: {
            primary: '#212529',
            secondary: '#555',
            muted: '#777',
        },
        background: '#fff',
        divider: '#ececec',
    };
};

export default createColorPalette;