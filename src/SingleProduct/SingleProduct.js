import useFetch from "../useFetch";
import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { catalogue } = useFetch("http://localhost:8000/catalogue/" + id);

  return (
    <div className={styles.productWrapper}>
      <img alt="product" src={catalogue.img} />
      <h3>{catalogue.description}</h3>
      <p>£{(catalogue.price / 100).toFixed(2)}</p>
      {catalogue.price < catalogue.RRP && (
        <p className={styles.sale}> ON SALE</p>
      )}
    </div>
  );
}

export default SingleProduct;
