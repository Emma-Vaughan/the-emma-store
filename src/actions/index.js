export const catalogue = () => {
  return {
    type: "CATALOGUE",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const price = () => {
  return {
    type: "PRICE",
  };
};

export const sale = () => {
  return {
    type: "SALE",
  };
};

export const lessThanTen = () => {
  return {
    type: "LESSTHANTEN",
  };
};

export const searchTerm = (data) => {
  return {
    data: data,
    type: "SEARCHTERM",
  };
};

export const basket = (data) => {
  return {
    data: data,
    type: "BASKET",
  };
};
