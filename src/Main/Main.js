import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";
import useFetch from "../useFetch";
import { useSelector, useDispatch } from "react-redux";
import { sale, price, lessThanTen } from "../actions/index";

function Main() {
  const { catalogue } = useFetch("http://localhost:8000/catalogue");

  const saleState = useSelector((state) => state.saleReducer);
  const priceState = useSelector((state) => state.priceReducer);
  const lessThanTenState = useSelector((state) => state.lessThanTenReducer);

  const dispatch = useDispatch();

  let itemsToRender = [...catalogue];

  if (saleState === true) {
    itemsToRender = itemsToRender.filter((item) => {
      return item.price < item.RRP;
    });
  }

  if (priceState === true) {
    itemsToRender = itemsToRender.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (lessThanTenState === true) {
    itemsToRender = itemsToRender.filter((item) => {
      return item.price < 1000;
    });
  }

  return (
    <div>
      <form>
        <ul className={styles.filters}>
          <li className={styles.priceSwitch}>
            {!priceState && <label>Sort by price ascending</label>}
            {priceState && <label>Undo price filter</label>}
            <input
              id="priceSort"
              type="checkbox"
              name="price"
              onClick={() => dispatch(price())}
            />
          </li>
          <li className={styles.under10}>
            <label>Under £10</label>
            <input
              id="under10"
              type="checkbox"
              name="ten"
              onClick={() => dispatch(lessThanTen())}
            />
          </li>
          <li className={styles.sale}>
            <label>Only Sale Items</label>
            <input
              id="sale"
              type="checkbox"
              name="sale"
              onClick={() => dispatch(sale())}
            />
          </li>
        </ul>
      </form>
      <ProductCard catalogue={itemsToRender} />
    </div>
  );
}

export default Main;
