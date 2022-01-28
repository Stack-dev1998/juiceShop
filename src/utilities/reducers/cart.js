export const cart = (state = [], action) => {
  switch (action.type) {
    case "NEWPRODUCT":
      return [...state, { item: action.payload, quantity: 1 }];
    case "UPDATECART":
      return action.payload;
    default:
      return state;
  }
};
