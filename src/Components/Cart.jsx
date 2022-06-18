import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./cart.css"



const Cart = () => {
  const { Cart ,removeItem} = useContext(CartContext);
 console.log(Cart)
 const total = Cart.map(d => d.newprice).reduce((prev, curr) =>Number(prev)  + Number(curr), 0);
  return (
      
    <div className="M">
      <div className="C" >
      <div>Total::{total}</div>
        {Cart.map((item) => (
          <div key={item.id} className="b">
            <img  className="cartImg" src={item.img} alt="" />
            <h3>Title : {item.title}</h3>
            <h3>Price : {item.newprice}</h3>
            
            <button className="cartbutton" onClick={()=>{removeItem(item)}}>Remove from cart</button>
          </div>
          
        ))}
      </div>
    </div>
    
  );
};

export default Cart;