import React from 'react';
import './Button.module.css';
export default function Button(props) {
  return <button onClick={props.click}>{props.children}</button>;
}
