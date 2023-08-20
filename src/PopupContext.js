import React, { useContext, useState } from 'react';

const PopupContext = React.createContext();
const ShowPopupContext = React.createContext();
const HidePopupContext = React.createContext();

export function usePopup() {
  return useContext(PopupContext);
}
export function useShowPopup() {
  return useContext(ShowPopupContext);
}
export function useHidePopup() {
  return useContext(HidePopupContext);
}

export function PopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  const showPopupHandler = () => {
    setShowPopup(true);
  };

  const hidePopupHandler = () => {
    setShowPopup(false);
  };
  return (
    <PopupContext.Provider value={showPopup}>
      <ShowPopupContext.Provider value={showPopupHandler}>
        <HidePopupContext.Provider value={hidePopupHandler}>
          {children}
        </HidePopupContext.Provider>
      </ShowPopupContext.Provider>
    </PopupContext.Provider>
  );
}
