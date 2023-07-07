import React from "react";
import styles from "./navbar.module.scss";
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLogin, MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.nav_wrapper}>
          <h2>BuyBusy</h2>
          <ul>
            <li>
              <FaHome />
              <Link to="/">Home</Link>
            </li>

            <li>
              <MdOutlineShoppingCart />
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <MdLogin />
              <Link to="/signin">SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
