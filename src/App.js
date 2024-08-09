import React, { useReducer, useEffect, useContext, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";

import { useSelector, useDispatch } from 'react-redux';
import { setColors, toggleColor, setBrands, setProducts, toggleBrand, resetColors, resetBrands } from './store/headphonesSlice';




const App = () => {
  const dispatch =useDispatch()
  // const { state, dispatch } = useContext(AppContext);
  const [sortBy, setSortBy] = useState("")
  
  useEffect(() => {
    fetch("https://headphones-server.onrender.com/colors")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setColors(data));
      });

    fetch("https://headphones-server.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setBrands(data));
      });

    fetch("https://headphones-server.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);
  
  return (
    <div className="app-container">
      <Header sortBy={sortBy} setSortBy={setSortBy}/>
      <div className="main-content">
        <Sidebar />
        <ProductList sortBy={sortBy}/>
      </div>
    </div>
  );
};



export default App;
