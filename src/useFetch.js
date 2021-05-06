import { useState, useEffect } from "react";

function useFetch(url) {
  const [catalogue, setCatalogue] = useState([]);
  const [filters, setFilters] = useState([]);
  const [price, setPrice] = useState(false);

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

  function under10() {
    const filtered = [...catalogue].filter((item) => {
      return item.price < 1000;
    });
    if (document.getElementById("under10").checked) {
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

  return { catalogue, filters, sortByPrice, under10, price };
}

export default useFetch;
