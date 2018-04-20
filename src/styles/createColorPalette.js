const createColorPalette = customColorPalette => {
    return {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: '#00a1e9',
        secondary: '#6200ee',
        chill: '#e6e6e6',
        error: '#d9534f',
        text: {
            primary: '#212529',
            secondary: '#555',
            muted: '#777',
        },
        background: '#fff',
        divider: '#ececec',
        action: {
            disabled: '#d9d9d9',
        },
    };
};

export default createColorPalette;