import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import "./Item.css"


import { CartContext } from "../Context/CartContext";

const Item = () => {
  const { clickedItem } = useContext(ItemContext);
  let x = clickedItem;

  const { Cart, updateCart } = useContext(CartContext);
  console.log(Cart);

  return (
    <div className="Details">
      <div >
        <img  className="D" src={x.img} alt=""  />
        <h2>{x.title}</h2>
        <h3>Category : {x.category}</h3>
        <p>{x.description}</p>
        <p>price : {x.newprice}</p>
        
        <button className="B"
          onClick={() => {
            updateCart(x);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Item;