import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colors: [],
  brands: [],
  products: [],
  selectedColors: [],
  selectedBrands: [],
};

const headphonesSlice = createSlice({
  name: 'headphones',
  initialState,
  reducers: {
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    toggleColor: (state, action) => {
      if (state.selectedColors.includes(action.payload)) {
        state.selectedColors = state.selectedColors.filter(color => color !== action.payload);
      } else {
        state.selectedColors.push(action.payload);
      }
    },
    toggleBrand: (state, action) => {
      if (state.selectedBrands.includes(action.payload)) {
        state.selectedBrands = state.selectedBrands.filter(brand => brand !== action.payload);
      } else {
        state.selectedBrands.push(action.payload);
      }
    },
    resetColors: (state) => {
      state.selectedColors = [];
    },
    resetBrands: (state) => {
      state.selectedBrands = [];
    },
  },
});

export const { setColors, setBrands, setProducts, toggleColor, toggleBrand, resetColors, resetBrands } = headphonesSlice.actions;

export default headphonesSlice.reducer;
