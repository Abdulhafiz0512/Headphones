import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, addToCart } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className='products'>
            {cartItems.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image_url} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
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
               
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            ))}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
