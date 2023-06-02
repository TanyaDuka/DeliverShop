import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className={style.nav_links}>
      <div className={style.nav_li}>
        <Link to="/" className={location.pathname === "/" ? style.active : ""}>
          Shop
        </Link>
      </div>

      <div className={style.nav_li}>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? style.active : ""}
        >
          Shopping Cart
        </Link>
      </div>

      <div className={style.nav_li}>
        <Link
          to="/history"
          className={location.pathname === "/history" ? style.active : ""}
        >
          History
        </Link>
      </div>
      <div className={style.nav_li}>
        <Link
          to="/coupon"
          className={location.pathname === "/coupon" ? style.active : ""}
        >
          Coupon
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
