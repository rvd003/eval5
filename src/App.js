import "./App.css";
import Navbar from "../src/Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Items from "../src/Pages/Items";
import Cart from "../src/Components/Cart";
import Login from "./Components/Login";
import Home from "./Pages/Home"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/login" element={ <Login />}   ></Route>
        <Route path="/" element={<Home />}></Route>
        
         <Route path="/cart" element={<Cart />}></Route> 
        
         
         <Route path="/item" element={<Items />}></Route>
      </Routes>
      <hr/>
      
    </div>
  );
}

export default App;