import React, { useState, useContext } from "react";
import { AppContext } from "../reducer";

const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleColorClick = (colorName) => {
    dispatch({ type: "TOGGLE_COLOR", payload: colorName });
  };
  const handleResetColors = () => {
    dispatch({ type: "RESET_COLORS" });
  };

  const handleResetBrands = () => {
    dispatch({ type: "RESET_BRANDS" });
  };

  return (
    <aside className="sidebar">
     

      <div className="filter-section">
        <h2>Filter by Brand</h2>
        <ul>
          {state.brands.map((brand) => (
            <li key={brand}>
              <label>
                <input
                  type="checkbox"
                  value={brand}
                  checked={state.selectedBrands.includes(brand)}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_BRAND", payload: brand })
                  }
                />{" "}
                {brand}
              </label>
            </li>
          ))}
        </ul>

        <button className="reset-button" onClick={handleResetBrands}>Reset Brands</button>
      </div>
      <div className="filter-section ">
        <h2>Filter by Color</h2>
        <ul className="color-filter">
          {state.colors.map((color) => (
            <li key={color}>
              <span
                className={`color-circle ${
                  state.selectedColors.includes(color) ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></span>
            </li>
          ))}
        </ul>
        <button className="reset-button" onClick={handleResetColors}>
          Reset Colors
        </button>
      </div>
      
    </aside>
  );
};

export default Sidebar;
