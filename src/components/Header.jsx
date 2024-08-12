
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = ({sortBy, setSortBy}) => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartCount = cartItems.length;

  return (
    <header>
      <Link to="/"><div className="logo">Logo</div></Link>
      
      <select name="price" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value=""></option>
        <option value="cheap">Cheap</option>
        <option value="expensive">Expensive</option>
      </select>
      <Link to="/cart">
      <div className="cart">
        
          <i className="fa fa-shopping-cart" style={{color:"#007BFF", marginRight:"10px"}}></i>
          <span className="cart-count">{cartCount}</span>
        
      </div>
      </Link>
    </header>
  );
};

export default Header;

