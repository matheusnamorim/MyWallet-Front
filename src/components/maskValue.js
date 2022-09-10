export const valueMask = value => {
    return (value 
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1,$2')
    );
}