import React from "react";
import footer_logo from "../assets/logo_footer.svg";

function Footer(props) {
  return (
    <div>
      <div className="footer mt-5">
        <div className="container">
          <hr className="hr" />
          <div className="row mt-4">
            <div className="col-xs-12 col-sm-6 mt-2">
              <img src={footer_logo} className="footer_logo" />
              <br />
              <p className="text">
                Your natural candle made for
                <br /> your home and for your wellness.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 mt-2">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 mt-2">
                  <p className="heading">Discovery</p>
                  <a href="#">New season</a>
                  <a href="#">Most searched</a>
                  <a href="#">Most selled</a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 mt-2">
                  <p className="heading">About</p>
                  <a href="#">Help</a>
                  <a href="#">Shipping</a>
                  <a href="#">Affiliate</a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 mt-2">
                  <p className="heading">Info</p>
                  <a href="#">Contact us</a>
                  <a href="#">Privacy Policies</a>
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy_right">
        <div className="container d-flex justify-content-between p-3">
          <span>&#169; Candleaf All Rights Reserved.</span>{" "}
          <span>Designed by Hassan</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
