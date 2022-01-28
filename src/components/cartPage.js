import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pushToCart from "../utilities/addToCart";
import "./cart.css";

function Cartpage(props) {
  const cartItems = useSelector((state) => state.cart);
  console.log("cart", cartItems);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const increaseQty = (item) => {
    console.log("ssss", item);
    pushToCart(cartItems, item, dispatch, 1);
  };
  const decreaseQty = (item, qty) => {
    console.log("gggg", item);
    qty > 0 && pushToCart(cartItems, item, dispatch, -1);
  };
  const removeItemCart = (product) => {
    const updatedList = cartItems.filter((el) => {
      return el.item.id !== product.id;
    });
    removeItemCart.length > 0 &&
      dispatch({
        type: "UPDATECART",
        payload: updatedList,
      });
  };
  const totalPrice = () => {
    let totalP = cartItems.reduce(
      (a, b) => a + b["item"].price * b["quantity"],
      0
    );
    console.log("total price :", totalP);
    return totalP;
  };
  return (
    <div className="container cart_page">
      <div className="text-center mt-5">
        <h3> Your cart items</h3>
        <p
          role={"button"}
          className="mt-4"
          style={{ color: "#56b280" }}
          onClick={() => navigate("/")}
        >
          Back to shopping
        </p>
      </div>
      {cartItems.length > 0 && (
        <div className="d-flex border-bottom">
          <div style={{ width: "50%" }} className="d-flex">
            <p>
              <strong>Product</strong>
            </p>
          </div>
          <div
            style={{ width: "50%" }}
            className="d-flex justify-content-between"
          >
            <p>
              <strong>Price</strong>
            </p>
            <p>
              <strong>Quantity</strong>
            </p>
            <p>
              <strong>Total</strong>
            </p>
          </div>
        </div>
      )}

      {cartItems.length > 0 ? (
        cartItems.map((el) => {
          return (
            <div className="d-flex   cart_row  border-bottom">
              <div
                style={{
                  width: "50%",
                  display: "block",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <div className="row">
                  <div className="col-xs-12 col-md-4 img_col">
                    <img
                      style={{
                        width: "90%",
                        height: "100%",
                        background: "#F7F8FA",
                        objectFit: "fit",
                      }}
                      src={el.item.img}
                    />
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <p className="nm">{el.item.name}</p>
                    <p
                      className="text_green"
                      role={"button"}
                      onClick={() => removeItemCart(el.item)}
                    >
                      <strong>Remove</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ width: "50%" }}
                className="d-flex   justify-content-between mt-3 "
              >
                <p className="text_green m-0" style={{ fontWeight: "600" }}>
                  ${el.item.price}
                </p>
                <div>
                  <span className="counter">
                    <span role="button" onClick={() => increaseQty(el.item)}>
                      +
                    </span>
                    <span>{el.quantity}</span>
                    <span
                      role="button"
                      onClick={() => decreaseQty(el.item, el.quantity)}
                    >
                      -
                    </span>
                  </span>
                </div>
                <p className="text_green m-0" style={{ fontWeight: "600" }}>
                  ${el.item.price * el.quantity}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-center mt-5 mb-5">Your cart is empty</h2>
      )}
      <div className="row border-top">
        <div className="col-xs-12 col-md-6"></div>
        <div className="col-xs-12 col-md-6">
          <div className="d-flex justify-content-between align-items-center   mt-5">
            <div>
              <p className="m-0">
                <strong style={{ marginRight: "10px" }}>Sub-total</strong>
                <strong>{totalPrice()}</strong>
              </p>{" "}
              <p className="text-muted">
                Tax and shipping cost will be calculated later
              </p>
            </div>
            <div>
              <button
                className="normal_btn "
                onClick={() => navigate("/check-out")}
              >
                <strong>Check-out</strong>
              </button>
              <strong
                className=" text-center text_green d-block mt-2"
                onClick={() => navigate("/")}
              >
               Back
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
