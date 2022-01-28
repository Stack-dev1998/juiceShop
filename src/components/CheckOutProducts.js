import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CheckOutProducts(props) {
  const cartItems = useSelector((state) => state.cart);
  console.log("cart", cartItems);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((el) => {
        return (
          <div className="d-flex  mt-3">
            <div className="w-25" style={{ position: "relative" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#F7F8FA",
                  objectFit: "fit",
                }}
                src={el.item.img}
              />
              <span className="qty_count">{el.quantity}</span>
            </div>
            <div className="ms-4">
              <p className="">
                <strong>{el.item.name}</strong>
              </p>
              <p className="price">
                <strong>${el.item.price}</strong>
              </p>
            </div>
          </div>
        );
      })}
      <br />
      <hr></hr>
      <div className="d-flex justify-content-between my-5">
        <input type={"text"} placeholder="Coupon code" className="w-100 px-2" />
        <button className="desabled_btn ms-2 ">Add code</button>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between mt-4">
        <p>Sub Total</p>
        <p>
          ${cartItems.reduce((a, b) => a + b["item"].price * b["quantity"], 0)}
        </p>
      </div>

      <div className="d-flex justify-content-between ">
        <p>Shipping</p>
        <p className="text-muted">Calculated at the next step</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between mt-2">
        <p>
          <strong>Sub Total</strong>
        </p>
        <p>
          <strong>
            $
            {cartItems.reduce((a, b) => a + b["item"].price * b["quantity"], 0)}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default CheckOutProducts;
