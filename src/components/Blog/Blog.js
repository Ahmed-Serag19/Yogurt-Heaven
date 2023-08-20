import React from 'react';
import HeaderTitle from '../UI/HeaderTitle';
import classes from './Blog.module.css';
import BlogFirstImage from '../../images/new-chills.png';
import BlogSecondImage from '../../images/on-diet.png';
import Button from '../UI/Button';
import Border from '../../images/bg-border.gif';
import Popup from '../UI/Popup/Popup';
import { usePopup, useShowPopup } from '../../PopupContext';

export default function Blog() {
  const popup = usePopup();
  const showPopup = useShowPopup();
  console.log(popup);
  return (
    <section className={classes.blog}>
      {popup && <Popup />}
      <HeaderTitle>Blog</HeaderTitle>
      <div className="row my-5 d-flex justify-content-center ">
        <div className="col-md-2">
          <img src={BlogFirstImage} alt="" />
        </div>
        <div className="col-md-4">
          <h4 className={classes.blogH4}>NEW CHILLS FOR SUMMER</h4>
          <p className={classes.blogP}>
            Dairy-like, but dairy-free, irresistibly delicious with
            natural flavors. It is light yet loaded with healthy
            dietary fibers, vitamins, minerals, and antioxidants. It
            is simply As Good As an Apple. This not so yogurt is a
            result of an idea that took years to develop. experience.
            <br />
            We have fruit flavors that taste creamy like they are made
            of real milk. The flavor of this Not Yogurt is intense,
            its soft texture delivers a truly flavorful and memorable
          </p>
          <Button click={showPopup}>Read More</Button>
        </div>
      </div>
      <div className="w-25 my-5 m-auto">
        <img src={Border} alt="border" />
      </div>
      <div className="row my-5 d-flex justify-content-center ">
        <div className="col-md-2">
          <img src={BlogSecondImage} alt="" />
        </div>
        <div className="col-md-4">
          <h4 className={classes.blogH4}>BERRIES ON THE GROVE</h4>
          <p className={classes.blogP}>
            We do not use concentrated flavored and colored syrups. We
            make our frozen yogurt with only natural fruit, berries,
            some of the world’s best chocolate and real nuts. Own R&D
            and manufacturing allows us to control quality and
            innovate.
            <br />
            We want as many people as possible to enjoy our frozen
            "yogurt." Summer Love dessert is made for everyone and
            without compromises it is a wonderful and fairly healthy
            treat for anyone whether vegan or not.
          </p>
          <Button click={showPopup}>Read More</Button>
        </div>
      </div>
      <div className="w-25 my-5 m-auto">
        <img src={Border} alt="border" />
      </div>
    </section>
  );
}
