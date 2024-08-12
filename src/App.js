import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { setColors, setBrands, setProducts } from "./store/headphonesSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");

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
    <Router>
      <div className="app-container">
        <Header sortBy={sortBy} setSortBy={setSortBy} />
        <Routes>
          {/* Define a route for the homepage */}
          <Route
            path="/"
            element={
              <div className="main-content">
                <Sidebar />
                <ProductList sortBy={sortBy} />
              </div>
            }
          />
          {/* Define a route for the cart */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
