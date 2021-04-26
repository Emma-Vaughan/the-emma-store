import useFetch from "../useFetch";
import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { items } = useFetch("http://localhost:8000/catalogue/" + id);

  return (
    <div className={styles.productWrapper}>
      <img alt="product" src={items.img} />
      <h3>{items.description}</h3>
      <p>£{(items.price / 100).toFixed(2)}</p>
    </div>
  );
}

export default SingleProduct;
