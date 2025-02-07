export const mod10 = (value: string): boolean => {
    const sum = value
        .split("")
        .reverse()
        .reduce((acc, digit, i) => {
            const product = i % 2 === 0 ? parseInt(digit) : 2 * parseInt(digit);
            return acc + (product > 9 ? product - 9 : product);
        }, 0);

    return sum > 0 && sum % 10 === 0;
};

export const mod11 = (value: string): boolean => {
    const sum = value
        .split("")
        .reverse()
        .reduce((acc, digit, i) => {
            const factor = (i % 10) + 1;
            return acc + factor * parseInt(digit);
        }, 0);

    return sum > 0 && sum % 11 === 0;
};