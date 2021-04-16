import styles from "./Product-Card.module.css";

function ProductCard({ item }) {
  return (
    <div className={styles.cardParent}>
      {item.map((product) => (
        <div className={styles.card}>
          <img src={product.img} />
          <h4>{product.description}</h4>
          <p>£{(product.price / 100).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
