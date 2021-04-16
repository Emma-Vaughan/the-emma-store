import { useState, useEffect } from "react";
import ProductCard from "./Products/Product-Card";
import styles from "./Main.module.css";

function Main() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/catalogue")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <ProductCard item={item} />
    </div>
  );
}

export default Main;
