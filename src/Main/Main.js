import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";
import useFetch from "../useFetch";

function Main() {
  const { filters, sortByPrice, undoSortByPrice, under10 } = useFetch(
    "http://localhost:8000/catalogue"
  );

  return (
    <div>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            <label id="priceLabel">Sort by price ascending</label>
            <input
              id="priceSort"
              type="checkbox"
              name="price"
              onClick={sortByPrice}
            />
          </li>
          <li className={styles.under10}>
            <label>Under £10</label>
            <input id="under10" type="checkbox" name="ten" onChange={under10} />
          </li>
        </ul>
      </form>
      <ProductCard catalogue={filters} />
    </div>
  );
}

export default Main;
