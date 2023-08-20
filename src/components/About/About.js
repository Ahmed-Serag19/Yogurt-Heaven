import React from 'react';
import classes from './About.module.css';
import HeaderImage from '../../images/bg-header-about.jpg';
import HeaderTitle from '../UI/HeaderTitle';

export default function About() {
  return (
    <section>
      <HeaderTitle>About</HeaderTitle>
      <div className="row">
        <div
          className={`col-md-12 ${classes['about-img-container']}`}
        >
          <img src={HeaderImage} alt="frozen yogurt cup" />
        </div>
        <div className={`col-md-12 my-5 py-5`}>
          <div className={`row ${classes['about-us']}`}>
            <div className={`col-md-2 mx-5 ${classes.left}`}>
              <h3>BE PART OF OUR COMMUNITY</h3>
              <p>
                Why ? <br></br>Because Humans have consumed yogurt for
                hundreds of years. It’s very nutritious, and eating it
                regularly may boost several aspects of your health.
                For example, yogurt has been found to reduce the risk
                of heart disease and osteoporosis, as well as aid in
                weight management.
              </p>
            </div>
            <div className={`col-md-5 ${classes.right}`}>
              <h3>What is yogurt and how is it made?</h3>
              <p>
                Yogurt is a popular dairy product made by the
                bacterial fermentation of milk. The bacteria used to
                make yogurt are called “yogurt cultures,” which
                ferment lactose, the natural sugar found in milk. This
                process produces lactic acid, a substance that causes
                milk proteins to curdle, giving yogurt its unique
                flavor and texture. Yogurt can be made from all types
                of milk. Varieties made from skim milk are considered
                fat-free, whereas whole milk options are considered
                full fat.
              </p>
              <h3>Why Frozen Yogurt is better than Ice Cream?</h3>
              <p>
                Yogurts can be high in protein, calcium, vitamins, and
                live culture, or probiotics, which can enhance the gut
                microbiota. These can offer protection for bones and
                teeth and help prevent digestive problems. Low-fat
                yogurt can be a useful source of protein on a
                weight-loss diet. Probiotics may boost the immune
                system.
              </p>
              <h3>When Yogurt is bad for you ?</h3>
              <p>
                Not all yogurts are healthful. Those without added
                sugar or unnecessary additives can be a healthful
                addition to the diet, but some products have high
                quantities of added sugar and other ingredients that
                may not be beneficial. Natural yogurt can be a
                low-calorie, high-nutrient food packed with protein.
                <span className="text-danger">
                  Thats why we use Fruits and Stevia sweetener only!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
