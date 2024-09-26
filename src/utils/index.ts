export const moneyFormat = (value: string) => {
    const clearedPrice = clearPrice(value);
    return clearedPrice.toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export const clearPrice = (value: string) => {
    const clearedPrice = parseFloat(value.replace(/\s/g, '').replace(/,/g, '.'));
    return !Number.isNaN(clearedPrice) ? parseFloat(clearedPrice.toFixed(2)) : 0;
}