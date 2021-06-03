import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

function Basket() {
  const basketState = useSelector((state) => state.basketReducer);

  const { catalogue } = useFetch("http://localhost:8000/catalogue/");

  const itemsToRender = catalogue.filter((item) => item.id === basketState);

  return (
    <div>
      {itemsToRender.map((product) => (
        <div className={styles.card} key={product.id}>
          <img alt="product" src={product.img} />
          <h4>{product.description}</h4>
          <p>£{(product.price / 100).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Basket;
