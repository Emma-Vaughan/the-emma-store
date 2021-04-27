import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo}>Emma</h1>
        </Link>
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
