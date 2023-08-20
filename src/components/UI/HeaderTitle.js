import React from 'react';
import classes from './HeaderTitle.module.css';
export default function HeaderTitle(props) {
  return (
    <div className={classes.header}>
      <h1>{props.children}</h1>
    </div>
  );
}
