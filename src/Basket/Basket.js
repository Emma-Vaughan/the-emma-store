import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import useFetch from "../useFetch";

function Basket() {
  const basketState = useSelector((state) => state.basketReducer);

  const { catalogue } = useFetch("http://localhost:8000/catalogue/");

  const itemsToRender = catalogue.filter((item) =>
    basketState.includes(item.id)
  );

  const reducer = (a, b) => a + b.price;

  const total = itemsToRender.reduce(reducer, 0);

  return (
    <div>
      {itemsToRender.map((product) => (
        <div className={styles.card} key={product.id}>
          <img alt="product" src={product.img} />
          <h4>{product.description}</h4>
          <p>£{(product.price / 100).toFixed(2)}</p>
        </div>
      ))}
      <h3 className={styles.total}>Total: £{(total / 100).toFixed(2)}</h3>
    </div>
  );
}

export default Basket;
