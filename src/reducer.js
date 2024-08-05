import React, { createContext, useReducer } from "react";
 const initialState = {
  colors: [],
  brands: [],
  products: [],
  selectedColors: [],
  selectedBrands: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COLORS":
      return { ...state, colors: action.payload };
    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "TOGGLE_COLOR":
      return {
        ...state,
        selectedColors: state.selectedColors.includes(action.payload)
          ? state.selectedColors.filter(color => color !== action.payload)
          : [...state.selectedColors, action.payload],
      };
    case "TOGGLE_BRAND":
      return {
        ...state,
        selectedBrands: state.selectedBrands.includes(action.payload)
          ? state.selectedBrands.filter(brand => brand !== action.payload)
          : [...state.selectedBrands, action.payload],
      };
    case "RESET_COLORS":
        return {...state, selectedColors:[]}
    case "RESET_BRANDS":
        return {...state, selectedBrands:[]}
    default:
      return state;
  }
};


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
