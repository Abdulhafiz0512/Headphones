import React, { useReducer, useEffect, useContext, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";
import { AppContext, AppProvider } from "./reducer";



const AppContent = () => {
  const { state, dispatch } = useContext(AppContext);
  const [sortBy, setSortBy] = useState("")
  
  useEffect(() => {
    fetch("https://headphones-server.onrender.com/colors")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_COLORS", payload: data });
      });

    fetch("https://headphones-server.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_BRANDS", payload: data });
      });

    fetch("https://headphones-server.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data });
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

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
