import React, { useContext } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { resetBrands, resetColors, toggleColor, toggleBrand } from "../store/headphonesSlice";

const Sidebar = () => {
  const brands = useSelector(state => state.headphones.brands);
  const selectedBrands = useSelector(state => state.headphones.selectedBrands);
  const colors = useSelector(state => state.headphones.colors);
  const selectedColors = useSelector(state => state.headphones.selectedColors);
  // const { state, dispatch } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleColorClick = (colorName) => {
    dispatch(toggleColor(colorName));
  };
  const handleResetColors = () => {
    dispatch(resetColors());
  };

  const handleResetBrands = () => {
    dispatch(resetBrands());
  };

  return (
    // <aside className="sidebar">
     

    //   <div className="filter-section">
    //     <h2>Filter by Brand</h2>
    //     <ul>
    //       {state.brands.map((brand) => (
    //         <li key={brand}>
    //           <label>
    //             <input
    //               type="checkbox"
    //               value={brand}
    //               checked={state.selectedBrands.includes(brand)}
    //               onChange={() =>
    //                 dispatch({ type: "TOGGLE_BRAND", payload: brand })
    //               }
    //             />{" "}
    //             {brand}
    //           </label>
    //         </li>
    //       ))}
    //     </ul>

    //     <button className="reset-button" onClick={handleResetBrands}>Reset Brands</button>
    //   </div>
    //   <div className="filter-section ">
    //     <h2>Filter by Color</h2>
    //     <ul className="color-filter">
    //       {state.colors.map((color) => (
    //         <li key={color}>
    //           <span
    //             className={`color-circle ${
    //               state.selectedColors.includes(color) ? "selected" : ""
    //             }`}
    //             style={{ backgroundColor: color }}
    //             onClick={() => handleColorClick(color)}
    //           ></span>
    //         </li>
    //       ))}
    //     </ul>
    //     <button className="reset-button" onClick={handleResetColors}>
    //       Reset Colors
    //     </button>
    //   </div>
      
    // </aside>
    <aside className="sidebar">
    <div className="filter-section">
      <h2>Filter by Brand</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <label>
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => dispatch(toggleBrand(brand))}
              />{" "}
              {brand}
            </label>
          </li>
        ))}
      </ul>
      <button className="reset-button" onClick={handleResetBrands}>Reset Brands</button>
    </div>

    <div className="filter-section">
      <h2>Filter by Color</h2>
      <ul className="color-filter">
        {colors.map((color) => (
          <li key={color}>
            <span
              className={`color-circle ${
                selectedColors.includes(color) ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></span>
          </li>
        ))}
      </ul>
      <button className="reset-button" onClick={handleResetColors}>Reset Colors</button>
    </div>
  </aside>
  );
};

export default Sidebar;
