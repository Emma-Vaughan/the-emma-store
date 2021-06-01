export const saleFilter = (item) => item.price < item.RRP;

export const priceFilter = (a, b) => a.price - b.price;

export const lessThanTenFilter = (item) => item.price < 1000;
