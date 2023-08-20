import React, { useContext } from 'react';
import classes from './Popup.module.css';
import PopupImage from '../../../images/popup.png';
import { useHidePopup } from '../../../PopupContext';
export default function Popup() {
  const hide = useHidePopup();
  console.log(hide);
  return (
    <>
      <div className={classes.backgroud}>
        <div className={classes.layout} onClick={hide}>
          <img src={PopupImage} alt="popup" />
        </div>
      </div>
    </>
  );
}
