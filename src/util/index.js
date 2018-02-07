export const capitalize = word => {
    if (typeof word !== 'string') {
        throw new Error('argument must be a string');
    }
    return word[0].toUpperCase() + word.substring(1);
};