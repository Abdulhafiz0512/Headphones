import React, { useEffect, useState } from 'react';
import { addToCart } from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = ({ sortBy }) => {
  const products = useSelector(state => state.headphones.products);
  const dispatch = useDispatch();
  const cartItems =useSelector(state=> state.cart.cartItems)
  const selectedColors = useSelector(state => state.headphones.selectedColors);
  const selectedBrands = useSelector(state => state.headphones.selectedBrands);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filteredProducts = products.filter(product => {
      const matchesColor = selectedColors.length === 0 || product.color_options.some(color => selectedColors.includes(color));
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand_name);
      return matchesColor && matchesBrand;
    });

    if (sortBy) {
      if (sortBy === "cheap") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "expensive") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProducts(filteredProducts);
  }, [products, selectedColors, selectedBrands, sortBy]);

  return (
    <main className="product-list">
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <div className="colors" style={{display:"flex", gap:"10px", justifyContent:"center", marginBottom:"20px"}}>
              {product.color_options.map((color, colorIndex) => (
                <div
                  key={colorIndex}  
                  style={{
                    backgroundColor: color,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    border: "solid 0.25px"
                  }}
                ></div>
              ))}
            </div>
            <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))} disabled={cartItems.some(item => item.id === product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
