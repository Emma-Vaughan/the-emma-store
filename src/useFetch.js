import { useState, useEffect } from "react";

function useFetch(url) {
  const [catalogue, setCatalogue] = useState([]);
  // const [filters, setFilters] = useState([]);
  const [price, setPrice] = useState(false);
  const [sale, setSale] = useState(false);
  const [lessThanTen, setLessThanTen] = useState(false);

  function sortByPrice() {
    setPrice(!price);
  }

  function saleItems() {
    setSale(!sale);
  }

  function under10() {
    setLessThanTen(!lessThanTen);
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return {
    catalogue,
    sortByPrice,
    under10,
    price,
    saleItems,
    sale,
    lessThanTen,
  };
}

export default useFetch;
