import { useState, useEffect } from "react";

function useFetch(url) {
  const [items, setItems] = useState([]);

  function sortByPrice() {
    const sortedByPriceItems = [...items].sort((a, b) => {
      return a.price - b.price;
    });
    setItems(sortedByPriceItems);
  }

  function undoSortByPrice() {
    const undoPriceSort = [...items].sort((a, b) => {
      return a.id - b.id;
    });
    setItems(undoPriceSort);
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
        setItems(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return { items, sortByPrice, undoSortByPrice };
}

export default useFetch;
