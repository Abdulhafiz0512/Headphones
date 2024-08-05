import React, { useReducer, useEffect, useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";
import { AppContext, AppProvider } from "./reducer";

// const AppContent = () => {
//   const [state, dispatch] = useContext(AppContext);

//   useEffect(() => {
//     const fetchColors= async()=>{
//       const response =await fetch('https://headphones-server.onrender.com/colors')
//       const data=await response.json()
//       console.log(data)
//       dispatch({ type: 'SET_COLORS', payload: data });
//     }
//     const fetchBrands= async()=>{
//       const response =await fetch('https://headphones-server.onrender.com/brands')
//       const data=await response.json()
//       console.log(data)
//       dispatch({ type: 'SET_BRANDS', payload: data });
//     }
//     const fetchProducts= async()=>{
//       const response =await fetch('https://headphones-server.onrender.com/products')
//       const data=await response.json()
//       console.log(data)
//       dispatch({ type: 'SET_PRODUCTS', payload: data });
//     }

//     fetchBrands()
//     fetchColors()
//     fetchProducts()

//   }, [dispatch]);

//   return (
//     <div className="app-container">
//       <Header />
//       <div className="main-content">
//         <Sidebar />
//         <ProductList  />
//       </div>
//     </div>
//   );
// };

const AppContent = () => {
  const { state, dispatch } = useContext(AppContext);

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
  console.log(state.selectedColors)
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductList />
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
