const createColorPalette = customColorPalette => {
    return {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: '#00a1e9',
        error: '#d9534f',
        text: {
            primary: '#212529',
            secondary: '#555',
        },
        background: '#fff',
    };
}

export default createColorPalette;