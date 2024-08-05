import React, { useContext } from 'react';
import { AppContext } from '../reducer';
const ProductList = () => {
  const { state } = useContext(AppContext);
  const filteredProducts = state.products.filter(product => {
    const matchesColor = state.selectedColors.length === 0 || product.color_options.some(color => state.selectedColors.includes(color));
    const matchesBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(product.brand_name);
    return matchesColor && matchesBrand;
  });

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
