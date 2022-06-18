import React, { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  

  const updateCart = (item) => {
    setCart([...Cart, item]);
    console.log("adding to cart from art context");
    alert("Item added to Cart")
  };

  const removeItem = (item)=>{
    console.log("the item is logged after clicl on remove",item);
    let newCartItem=Cart.filter((el)=>{return item.id!==el.id})
    setCart([...newCartItem])
    console.log("The cart after remove item ",Cart);
    alert("Item Removed From Cart")
  }
  

  return (
    <CartContext.Provider value={{ Cart, updateCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};