import React, { useState } from 'react';
import classes from './Nav.module.css';
import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Nav() {
  const [showProducts, setShowProducts] = useState(false);
  const showProductsHandler = () => {
    setShowProducts(true);
  };
  const removeProductsHandler = () => {
    setShowProducts(false);
  };

  return (
    <nav className={classes.header}>
      <div>
        <NavLink to="/" onClick={removeProductsHandler}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
              onClick={removeProductsHandler}
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={showProductsHandler}
            className="position-relative"
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} `
                  : `${classes.inactive}`
              }
            >
              About
            </NavLink>
            <br />
            {showProducts && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.product}`
                    : `${classes.inactive} ${classes.product}`
                }
                to="/products"
              >
                Products
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={removeProductsHandler}
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
              onClick={removeProductsHandler}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
