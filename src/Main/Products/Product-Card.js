import { Link } from "react-router-dom";
import styles from "./Product-Card.module.css";

function ProductCard({ catalogue }) {
  return (
    <div className={styles.cardParent}>
      {catalogue.map((product) => (
        <div className={styles.card}>
          <Link to={`/catalogue/${product.id}`}>
            <img alt="product" src={product.img} />
          </Link>
          <h4>{product.description}</h4>
          <p>£{(product.price / 100).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
