// src/pages/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    const confirmed = window.confirm("Are you sure you want to remove this item from your cart?");
    if (confirmed) {
      dispatch(removeFromCart(productId));
    }
    
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity({ id: productId }));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity({ id: productId }));
  };
  
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div >
          <ul className='products' style={{alignItems:"left"}}>
            {cartItems.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image_url} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price*product.quantity}</p>
                <div className="colors" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
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
                <div className="count-btn">
                  <button onClick={() => handleDecrement(product.id)} disabled={product.quantity==1}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                  
                </div>
                <button onClick={() => handleRemove(product.id)} style={{marginTop:"10px"}}>Remove</button>
              </div>
            ))}
          </ul>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
          <button onClick={handleClearCart} >Clear Cart</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
