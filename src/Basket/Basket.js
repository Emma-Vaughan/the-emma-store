import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

function Basket() {
  const basketState = useSelector((state) => state.basketReducer);

  console.log("http://localhost:8000/catalogue/" + basketState);

  const { catalogue } = useFetch("http://localhost:8000/catalogue/");

  const itemsToRender = catalogue.filter((item) => item.id === basketState);

  return (
    <div className={styles.basketMain}>
      {itemsToRender.map((product) => (
        <div className={styles.card} key={product.id}>
          <Link to={`/catalogue/${product.id}`}>
            <img alt="product" src={product.img} />
          </Link>
          <h4>{product.description}</h4>
          <p>£{(product.price / 100).toFixed(2)}</p>
          {product.price < product.RRP && (
            <p className={styles.sale}> ON SALE</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Basket;
