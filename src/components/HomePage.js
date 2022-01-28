import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import main_imag from "../assets/bg-image.png";
import hero_title from "../assets/hero-title.png";
import check from "../assets/check.svg";
import image from "../assets/image.png";
import person from "../assets/person1.png";
import female1 from "../assets/female.png";
import female2 from "../assets/female2.png";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../utilities/products";
import pushToCart from "../utilities/addToCart";
function HomePage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const addToCart = (item) => {
    pushToCart(cart, item, dispatch);
  };
  return (
    <div>
      <div className="main_img">
        <img src={main_imag} />
        <div className="bg_card">
          <div className="hero_title">
            <img src={hero_title} className="img-fluid" />
          </div>

          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments.
          </p>
          <button>Discovery our collection</button>
        </div>
      </div>
      <div className="container text-center products">
        <h2>
          <strong>Products</strong>
        </h2>
        <p>Order it for you or for your beloved ones </p>
        <br></br>

        <div className="row">
          {products.length != 0 &&
            products.map((item) => {
              return (
                <div key={item.id} className="col-xs-12 col-sm-6 col-md-3 mt-4">
                  <div className="card">
                    <div className="card_body">
                      <img src={item.img} />
                    </div>
                    <div className="card_footer">
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>
                        <strong>{item.price}</strong>
                      </p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-sm buy_btn"
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn btn-sm buy_btn"
                          onClick={() => {
                            navigate(`/product-detail/${item.id}`);
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="soy_wax">
        <div className="container">
          <div className="row   pt-4 pb-4">
            <div className="col-xs-12 col-md-6 order-2 order-md-1 my-auto">
              <h1>
                <strong>
                  Clean and <br /> fragrant soy wax
                </strong>
              </h1>
              <p className="green_text">
                Made for your home and for your wellness
              </p>
              <div className="list">
                <p>
                  <img src={check} />
                  Eco-sustainable:All recyclable materials, 0% CO2 emissions
                </p>
                <p>
                  <img src={check} />
                  Hyphoallergenic: 100% natural, human friendly ingredients
                </p>
                <p>
                  <img src={check} />
                  Handmade: All candles are craftly made with love.
                </p>
                <p>
                  <img src={check} />
                  Long burning: No more waste. Created for last long.
                </p>
              </div>
              <button>Learn more</button>
            </div>
            <div className="col-xs-12 col-md-6 order-1 order-md-2 my-auto">
              <div className="side_img">
                <img src={image} />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="testmonial  align-items-center justify-content-center">
        <div className="container text-center">
          <h1>
            <strong>Testimonials</strong>
          </h1>
          <p>Some quotes from our happy customers</p>
          <div className="row pt-4 pb-4">
            <div className="col-xs-12 col-sm-6 col-md-4 mt-2  my-auto">
              <div className="bg_white card d-flex align-items-center justify-content-center">
                <img src={female1} className="user_img" />
                <div className="d-flex">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
                <strong className="mt-2">
                  “I love it! No more air fresheners”
                </strong>
                <p className="text-muted">Luisa</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-2 ">
              <div className="bg_white card d-flex align-items-center justify-content-center">
                <img src={person} className="user_img" />{" "}
                <div className="d-flex">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
                <strong className="mt-2">“Raccomended for everyone”</strong>
                <p className="text-muted">Edoardo</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4  mt-2 ">
              <div className="bg_white card d-flex align-items-center justify-content-center">
                <img src={female2} className="user_img mt-2" />{" "}
                <div className="d-flex">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
                <strong className="mt-2">
                  “Looks very natural, the smell is awesome”
                </strong>
                <p className="text-muted">Mart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center products">
        <h2>
          <strong>Popular</strong>
        </h2>
        <p className="mb-4">Our top selling product that you a like</p>
        <br></br>
        <div className="row mt-4">
          {products.length != 0 &&
            products.map((item, i) => {
              return i < 4 ? (
                <div  key ={item.id} className="col-xs-12 col-sm-6 col-md-3 mt-4">
                  <div className="card">
                    <div className="card_body">
                      <img src={item.img} />
                    </div>
                    <div className="card_footer">
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>
                        <strong>{item.price}</strong>
                      </p>
                      <button className="btn btn-sm buy_btn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
