import React from "react";



import { Link } from "react-router-dom";
 import { CartContext } from "../Context/CartContext";
 import { useContext } from "react";
 import "./Navbar.css"

  const Navbar = () => {
  const { Cart } = useContext(CartContext);
  

  return (
    <div className="N">
      <div className="Nav">
       
        <Link to="/"> <div>Home</div></Link>
        <Link to="/login"><div>Login</div></Link>
       
         <Link to="/cart"><div>Cart({Cart.length})</div></Link> 
      </div>
      <div >
        
      </div>
        <hr/>
    </div>
  );
};

export default Navbar