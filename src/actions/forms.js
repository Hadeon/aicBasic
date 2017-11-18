export const valid = text => {
    return {
        type: 'VALID',
        authorized: true
    }
}

export const invalid = text => {
    return {
        type: 'INVALID',
        authorized: false
    };
}
