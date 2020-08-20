import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.link} to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={styles.link} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
