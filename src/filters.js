export function saleFilter(item) {
  return item.price < item.RRP;
}

export function priceFilter(a, b) {
  return a.price - b.price;
}

export function lessThanTenFilter(item) {
  return item.price < 1000;
}
