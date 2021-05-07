import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";
import useFetch from "../useFetch";

function Main() {
  const { filters, sortByPrice, under10, price, saleItems } = useFetch(
    "http://localhost:8000/catalogue"
  );

  return (
    <div>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            {!price && <label>Sort by price ascending</label>}
            {price && <label>Undo price filter</label>}
            <input
              id="priceSort"
              type="checkbox"
              name="price"
              onClick={sortByPrice}
            />
          </li>
          <li className={styles.under10}>
            <label>Under £10</label>
            <input id="under10" type="checkbox" name="ten" onClick={under10} />
          </li>
          <li className={styles.sale}>
            <label>Only Sale Items</label>
            <input id="sale" type="checkbox" name="sale" onClick={saleItems} />
          </li>
        </ul>
      </form>
      <ProductCard catalogue={filters} />
    </div>
  );
}

export default Main;
