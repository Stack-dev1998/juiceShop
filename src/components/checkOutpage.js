import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pushToCart from "../utilities/addToCart";
import CheckOutForm from "./CheckOutForm";
import CheckOutProducts from "./CheckOutProducts";
function CheckOutpage(props) {
  const cartItems = useSelector((state) => state.cart);
  console.log("cart", cartItems);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="container ">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <CheckOutForm />
        </div>
        <div className="col-xs-12 col-md-6 mt-3">
           <CheckOutProducts/>
        </div>
      </div>
    </div>
  );
}

export default CheckOutpage;
