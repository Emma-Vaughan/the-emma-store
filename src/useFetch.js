import { useState, useEffect } from "react";

function useFetch(url) {
  const [catalogue, setCatalogue] = useState([]);
  const [filters, setFilters] = useState([]);
  const [price, setPrice] = useState(false);
  const [sale, setSale] = useState(false);
  const [lessThanTen, setLessThanTen] = useState(false);

  function sortByPrice() {
    const sortedByPrice = [...catalogue].sort((a, b) => {
      return a.price - b.price;
    });

    const newPrice = price ? false : true;

    setPrice(newPrice);
    if (newPrice === true) {
      setFilters(sortedByPrice);
    } else {
      setFilters(catalogue);
    }
  }

  function saleItems() {
    const sortSale = [...catalogue].filter((item) => {
      return item.price < item.RRP;
    });

    const onSale = sale ? false : true;

    setSale(onSale);

    if (onSale === true) {
      setFilters(sortSale);
    } else {
      setFilters(catalogue);
    }
  }

  function under10() {
    const filtered = [...catalogue].filter((item) => {
      return item.price < 1000;
    });

    const underTen = lessThanTen ? false : true;

    setLessThanTen(underTen);

    if (underTen === true) {
      setFilters(filtered);
    } else {
      setFilters(catalogue);
    }
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCatalogue(data);
        setFilters(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return { catalogue, filters, sortByPrice, under10, price, saleItems };
}

export default useFetch;
