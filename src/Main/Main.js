import { useState, useEffect } from "react";
import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";

function Main() {
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/catalogue")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function filterByPrice() {
    const sortedByPriceItems = [...item].sort((a, b) => {
      return a.price - b.price;
    });
    setItem(sortedByPriceItems);
    console.log(item);
  }

  function undoFilterByPrice() {
    const undoPriceSort = [...item].sort((a, b) => {
      return a.key - b.key;
    });
    setItem(undoPriceSort);
    console.log(item);
  }

  return (
    <div>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            <label>Sort by price ascending</label>
            <input type="radio" name="price" onClick={filterByPrice} />
          </li>
          <li className={styles.nopriceSwitch}>
            <label>Undo price filter</label>
            <input type="radio" name="price" onClick={undoFilterByPrice} />
          </li>
        </ul>
      </form>
      <ProductCard item={item} />
    </div>
  );
}

export default Main;
