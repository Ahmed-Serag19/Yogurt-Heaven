import React from 'react';
import HeaderTitle from '../UI/HeaderTitle';
import { firstRow, secondRow, thirdRow } from '../../data';
import classes from './Products.module.css';
import ProductRow from '../UI/ProductRow';
export default function Products() {
  return (
    <section>
      <HeaderTitle>Products</HeaderTitle>
      <div className={classes['product-container']}>
        <ProductRow data={firstRow} />
        <ProductRow data={secondRow} />
        <ProductRow data={thirdRow} />
      </div>
    </section>
  );
}
