import { useState, useEffect } from "react";
import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/catalogue")
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
  }, []);

  function sortByPrice() {
    const sortedByPriceItems = [...items].sort((a, b) => {
      return a.price - b.price;
    });
    setItems(sortedByPriceItems);
  }

  function undoSortByPrice() {
    const undoPriceSort = [...items].sort((a, b) => {
      return a.key - b.key;
    });
    setItems(undoPriceSort);
  }

  return (
    <div>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            <label>Sort by price ascending</label>
            <input type="radio" name="price" onClick={sortByPrice} />
          </li>
          <li className={styles.nopriceSwitch}>
            <label>Undo price filter</label>
            <input type="radio" name="price" onClick={undoSortByPrice} />
          </li>
        </ul>
      </form>
      <ProductCard items={items} />
    </div>
  );
}

export default Main;
