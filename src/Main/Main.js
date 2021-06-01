import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";
import useFetch from "../useFetch";
import { useSelector, useDispatch } from "react-redux";
import { sale, price, lessThanTen } from "../actions/index";
import { saleFilter, priceFilter, lessThanTenFilter } from "../filters";

function Main() {
  const { catalogue } = useFetch("http://localhost:8000/catalogue");

  const saleState = useSelector((state) => state.saleReducer);
  const priceState = useSelector((state) => state.priceReducer);
  const lessThanTenState = useSelector((state) => state.lessThanTenReducer);

  const dispatch = useDispatch();

  let itemsToRender = [...catalogue];

  if (saleState) {
    itemsToRender = itemsToRender.filter(saleFilter);
  }

  if (priceState) {
    itemsToRender = itemsToRender.sort(priceFilter);
  }

  if (lessThanTenState) {
    itemsToRender = itemsToRender.filter(lessThanTenFilter);
  }

  return (
    <div className={styles.main}>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            {!priceState && <label>Sort by price ascending</label>}
            {priceState && <label>Undo price filter</label>}
            <input
              id="priceSort"
              type="checkbox"
              checked={priceState}
              name="price"
              onChange={() => dispatch(price())}
            />
          </li>
          <li className={styles.under10}>
            <label>Under £10</label>
            <input
              id="under10"
              type="checkbox"
              checked={lessThanTenState}
              name="ten"
              onChange={() => dispatch(lessThanTen())}
            />
          </li>
          <li className={styles.sale}>
            <label>Only Sale Items</label>
            <input
              id="sale"
              type="checkbox"
              checked={saleState}
              name="sale"
              onChange={() => dispatch(sale())}
            />
          </li>
        </ul>
      </form>
      <ProductCard catalogue={itemsToRender} />
    </div>
  );
}

export default Main;
