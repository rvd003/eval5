import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Home.css"

import { ItemContext } from "../Context/ItemContext";

const Home = () => {
  const [items, setItems] = useState([]);
  const { getClickedItem } = useContext(ItemContext);

  //importing contexts
  const handleClick = (item) => {
    getClickedItem(item);
  };

  useEffect(() => {
    axios
      .get(`  http://localhost:8080/products`)
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div  className="Grid">
      {items.map((item) => (
        <div key={item.id} className="Box" >
          <img src={item.img} alt="" />
          <p>Title : {item.title}</p>
          <p>Price : {item.newprice}</p>
         
          <button
               className="but"
            onClick={() => {
              handleClick(item);
            }}
            
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;