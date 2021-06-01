import { saleFilter, priceFilter, lessThanTenFilter } from "./filters";

const matissePoster = {
  img: "/Images/image1.jpg",
  price: 800,
  RRP: 1000,
  description: "Matisse Poster",
  id: 1,
};

const candle = {
  img: "/Images/image2.jpg",
  price: 1250,
  RRP: 1250,
  description: "Natural Himalayan Candle Holder",
  id: 2,
};

const jug = {
  img: "/Images/image7.jpg",
  price: 950,
  RRP: 1000,
  description: "Milk Carton Shape Ceramic Jug",
  id: 7,
};

const ring = {
  img: "/Images/image5.jpg",
  price: 1599,
  RRP: 1599,
  description: "Croissant Chunky Gold Ring",
  id: 5,
};

const ceramicDog = {
  img: "/Images/image6.jpg",
  price: 1000,
  RRP: 1000,
  description: "Ceramic Wonky Dog Candlestick Holder",
  id: 6,
};

describe("testing the main page filters", () => {
  test("sale filter selects only the sale items", () => {
    const allItems = [matissePoster, candle];
    const saleItems = [matissePoster];
    expect(allItems.filter(saleFilter)).toEqual(saleItems);
  });

  test("testing the price filter organises in price ascending", () => {
    const listBefore = [candle, matissePoster];
    const listAfter = [matissePoster, candle];
    expect(listBefore.sort(priceFilter)).toEqual(listAfter);
  });

  test("testing the lessThanTen filter removes anything over £10", () => {
    const list1 = [ring, ceramicDog, jug];
    const list2 = [jug];
    expect(list1.filter(lessThanTenFilter)).toEqual(list2);
  });
});
