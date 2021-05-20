import React from "react";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { reset } from "../actions";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.logo} onClick={() => dispatch(reset())}>
          Emma
        </h1>
        <button className={styles.signIn}>Sign In</button>
        <div className={styles.basket}>
          <i class="fa fa-shopping-basket"></i>
        </div>
        <form className={styles.searchBar}>
          <input type="text" placeholder="Search for anything" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
