import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [clickedItem, setClickedItem] = useState({});
  const navigate = useNavigate();
  const getClickedItem = (item) => {
    setClickedItem(item);
    navigate("/item");
  };

  return (
    <ItemContext.Provider value={{ getClickedItem, clickedItem }}>
      {children}
    </ItemContext.Provider>
  );
};