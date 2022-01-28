import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./productDetail.css";
import pushToCart from "../utilities/addToCart";
import { ReactComponent as Cart } from "../assets/white_cart.svg";

function ProductDetailPage(props) {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const allProducts = useSelector((state) => state.products);
  let product = allProducts.filter((el) => {
    return el.id == params.id && el;
  });

  const cartItems = useSelector((state) => state.cart);
  const addToCart = (item) => {
    pushToCart(cartItems, item, dispatch, qty);
  };
  return (
    <div className="container">
      <div className="row detail">
        <div className="col-xs-12 col-md-6 text-center">
          <div className="img_div">
            <img src={product[0].img} alt="sss" />
          </div>
          <p className="desc">{product[0].desc}</p>
          <p className="free_shiping">🚚 FREE SHIPPING </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <p className="name">{product[0].name}®</p>
          <div className="row">
            <div className="col-xs-12  col-lg-6 mt-3">
              <p className="price">${product[0].price}</p>
              <div>
                <p>Quantity</p>
                <span className="counter">
                  <span role="button" onClick={() => setQty(qty + 1)}>
                    +
                  </span>
                  <span>{qty}</span>
                  <span
                    role="button"
                    onClick={() => qty > 0 && setQty(qty - 1)}
                  >
                    -
                  </span>
                </span>
              </div>
              <button className="btn" onClick={() => addToCart(product[0])}>
                <Cart style={{ color: "white" }} /> Add To Cart
              </button>
            </div>
            <div className="col-xs-12  col-lg-6 mt-3">
              <p className="d-flex align-items-center ">
                <input type={"radio"} className="radio_btn" />
                <p className="m-0">One time purchase</p>
              </p>
              <p className="d-flex align-items-center justify-content-between">
                <input type={"radio"} checked={true} className="radio_btn" />
                <p className="m-0">Subscribe and delivery every </p>
                <select name="weeks" id="weeks" style={{ width: "70px" }}>
                  <option value="4 weeks">4 weeks</option>
                  <option value="8 weeks">8 weeks</option>
                  <option value="12 weeks">12 weeks</option>
                  <option value="16 weeks">16 weeks</option>
                </select>
              </p>
              <p className="paragraph">
                Subscribe now and get the 10% of discount on every recurring
                order. The discount will be applied at checkout. See details
              </p>
            </div>
          </div>

          <div className="additional_detail">
            <p>
              Wax:
              <span style={{ color: "#56b280" }}>
                Top grade Soy wax that delivers a smoke less, consistent burn
              </span>
            </p>
            <p>
              Fragrance:
              <span style={{ color: "#56b280" }}>
                Top grade Soy wax that delivers a smoke less, consistent burn
              </span>
            </p>
            <p className="d-flex justify-content-betwee">
              <span>
                Burning Time:
                <span style={{ color: "#56b280" }}> 70-75 hours</span>
              </span>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                Dimension: <span style={{ color: "#56b280" }}> 10cm x 5cm</span>
              </span>
              <span>
                Weight:<span style={{ color: "#56b280" }}> 400g</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <p
        role={"button"}
        onClick={() => navigate("/")}
        style={{ color: "green" }}
      >
        Back
      </p>
    </div>
  );
}

export default ProductDetailPage;
