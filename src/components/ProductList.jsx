// import React, { useContext, useEffect } from 'react';
// import { AppContext } from '../reducer';
// const ProductList = ({sortBy}) => {
//   const { state } = useContext(AppContext);
//   const filteredProducts = state.products.filter(product => {
//     const matchesColor = state.selectedColors.length === 0 || product.color_options.some(color => state.selectedColors.includes(color));
//     const matchesBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(product.brand_name);
//     return matchesColor && matchesBrand;
//   });
  
//     if(sortBy){
//       if(sortBy="cheap"){
//         filteredProducts.sort((a,b)=>a.price-b.price)
//       }
//       if(sortBy="expensive"){
//         filteredProducts.sort((a,b)=>b.price-a.price)
//       }
//     }
    

  
//   return (
//     <main className="product-list">
//       <div className="products">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image_url} alt={product.name} className="product-image" />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">${product.price}</p>
//             <button className="add-to-cart-button">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default ProductList;
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../reducer';

const ProductList = ({ sortBy }) => {
  const { state } = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let products = state.products.filter(product => {
      const matchesColor = state.selectedColors.length === 0 || product.color_options.some(color => state.selectedColors.includes(color));
      const matchesBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(product.brand_name);
      return matchesColor && matchesBrand;
    });

    if (sortBy) {
      if (sortBy === "cheap") {
        products.sort((a, b) => a.price - b.price);
      }
      if (sortBy === "expensive") {
        products.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProducts(products);
  }, [state.products, state.selectedColors, state.selectedBrands, sortBy]);

  return (
    <main className="product-list">
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;

