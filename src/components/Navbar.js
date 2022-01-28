import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../utilities/getWindowDimention";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";
function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const [topbarMenu, setTopbarMenu] = useState(false);

  let navigate = useNavigate();
  let size = useWindowDimensions();
  useEffect(() => {
    size.width > 767 ? setNavbar(true) : setNavbar(false);
  }, [size]);
  const cartItemsCount = useSelector((state) => state.cart);
  return (
    <div className="container nv">
      <div className="d-flex justify-content-between align-items-center nav">
        {size.width <= 767 && (
          <span
            className="humburger_icon pl-2"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <span>&#10005; </span> : <span>&#9776;</span>}
          </span>
        )}
        <img src={logo} />
        <ul className="big_screen_nav">
          <li className="nav_item">Discovery</li>
          <li className="nav_item">About</li>
          <li className="nav_item">Contact us</li>
        </ul>

        <div className="icons">
          <img role={"button"} className="me-5" src={user} />{" "}
          <span className="shopping_cart_div">
            <img
              role={"button"}
              className="shopping_cart_icon"
              onClick={() => navigate("/cart")}
              src={cart}
            />
            <span className="count_cart_items">{cartItemsCount.length}</span>
          </span>
        </div>
      </div>

      {navbar && (
        <ul className="small_screen_nav">
          <li className="nav_item">Discovery</li>
          <li className="nav_item">About</li>
          <li className="nav_item">Contact us</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
