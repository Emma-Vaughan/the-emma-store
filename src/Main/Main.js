import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";
import useFetch from "../useFetch";

function Main() {
  const { items, sortByPrice, undoSortByPrice } = useFetch(
    "http://localhost:8000/catalogue"
  );

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
