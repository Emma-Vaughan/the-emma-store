import { useState, useEffect } from "react";

function useFetch(url) {
  const [catalogue, setCatalogue] = useState([]);
  const [filters, setFilters] = useState([]);

  function sortByPrice() {
    const sortedByPrice = [...catalogue].sort((a, b) => {
      return a.price - b.price;
    });
    if (document.getElementById("priceSort").checked) {
      setFilters(sortedByPrice);
      document.getElementById("priceLabel").innerHTML = "Undo price filter";
    } else {
      setFilters(catalogue);
      document.getElementById("priceLabel").innerHTML =
        "Sort by price ascending";
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

  return { filters, sortByPrice, under10 };
}

export default useFetch;
