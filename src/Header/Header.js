import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset, searchTerm } from "../actions";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo} onClick={() => dispatch(reset())}>
            Emma
          </h1>
        </Link>
        <button className={styles.signIn}>Sign In</button>
        <div className={styles.basket}>
          <Link to="/basket">
            <i className="fa fa-shopping-basket"></i>
          </Link>
        </div>
        <form className={styles.searchBar}>
          <input
            onChange={(event) => dispatch(searchTerm(event.target.value))}
            type="text"
            placeholder="Search for anything"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
