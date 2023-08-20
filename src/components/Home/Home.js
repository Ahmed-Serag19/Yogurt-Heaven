import React from 'react';
import classes from './Home.module.css';
import MainImage from '../../images/home.jpg';
import YogurtCup from '../../images/yogurt.jpg';
import Products from '../../images/products.png';
import OurStory from '../../images/ourStory.png';
import Location from '../../images/location.png';
import Flavours from '../../images/flavours.png';

import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <section className={classes.main}>
      <img className={classes.mainImage} src={MainImage} alt="main" />
      <div className={classes['icon-container']}>
        <Link to="/products">
          {' '}
          Freeze
          <br />
          Delight
        </Link>
      </div>
      <div>
        <div className={`row p-5 ${classes.newProduct}`}>
          <div className="col-md-4">
            <h5>New Product</h5>
            <h3>The Twist of Healthy Yogurt</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id esse nemo dignissimos tempore voluptas aliquid rerum
              ex minus repellendus sint
            </p>
          </div>
          <div className="col-md-3">
            <img src={YogurtCup} alt="yogurt cup" />
          </div>
        </div>
        <div className={classes['icon-links']}>
          <ul className="row">
            <li className="col-md-2">
              <Link to="/products">
                <img src={Products} alt="products icon" />
              </Link>
              <h4>Products</h4>
            </li>
            <li className="col-md-2">
              <Link to="/about">
                <img src={OurStory} alt="products icon" />
              </Link>
              <h4>Our Story</h4>
            </li>
            <li className="col-md-2">
              <Link to="/products">
                <img src={Flavours} alt="products icon" />
              </Link>
              <h4>Flavours</h4>
            </li>
            <li className="col-md-2">
              <Link to="/contact">
                <img src={Location} alt="products icon" />
              </Link>
              <h4>Location</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
