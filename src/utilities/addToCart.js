export default function addToCart(cartProducts, currentProduct, dispatch, qty) {
  console.log("fkffkfkfk");
  let isExist = false;
  let updatedCartList = cartProducts.map((el) => {
    if (currentProduct.id == el.item.id) {
      isExist = true;
      return {
        item: currentProduct,
        quantity:
          qty == undefined
            ? parseInt(el.quantity) + 1
            : parseInt(el.quantity) + qty,
      };
    } else {
      return el;
    }
  });
  isExist
    ? dispatch({
        type: "UPDATECART",
        payload: updatedCartList,
      })
    : dispatch({
        type: "NEWPRODUCT",
        payload: currentProduct,
      });
}
