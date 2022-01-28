import { getProducts } from "../products";
export const products = (state = getProducts, action) => {
  switch (action.type) {
    case "ADDPRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};
