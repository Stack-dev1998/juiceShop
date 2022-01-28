import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import creditCard from "../assets/CreditCard.svg";
import { ReactComponent as Lock } from "../assets/LockFill.svg";
import { ReactComponent as Info } from "../assets/InfoSquareFill.svg";
import { ReactComponent as Check } from "../assets/CheckCircle.svg";

function CheckOutForm(props) {
  const [formFields, setFormFields] = useState({});
  const [activeTab, setActiveTab] = useState({
    id: 1,
  });
  const [tabs, setTabs] = useState([
    { id: 1, name: "Details" },
    { id: 2, name: "Shipping" },
    { id: 3, name: "Payment" },
  ]);

  const onChangeHandler = (e) => {
    console.log(e.target);
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const onChangeCheckbox = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.checked });
  };

  const gotoNextTab = () => {
    if (activeTab.id === 1) {
      setActiveTab({ id: 2, name: "Shipping" });
    } else if (activeTab.id === 2) {
      setActiveTab({ id: 3, name: "Payment" });
    }
  };
  const gotoBackTab = () => {
    if (activeTab.id === 2) {
      setActiveTab({ id: 1, name: "Details" });
    } else if (activeTab.id === 3) {
      setActiveTab({ id: 2, name: "Shipping" });
    }
  };
  const gotoEditTab = () => {
    setActiveTab({ id: 1, name: "Details" });
  };

  const currentTab =
    (activeTab.id == 1 && (
      <Details
        gotoNextTab={gotoNextTab}
        onChangeHandler={onChangeHandler}
        onChangeCheckbox={onChangeCheckbox}
        formFields={formFields}
      />
    )) ||
    (activeTab.id == 2 && (
      <Shipping
        gotoNextTab={gotoNextTab}
        gotoBackTab={gotoBackTab}
        gotoEditTab={gotoEditTab}
        onChangeHandler={onChangeHandler}
        onChangeCheckbox={onChangeCheckbox}
        formFields={formFields}
      />
    )) ||
    (activeTab.id == 3 && (
      <Payment
        gotoNextTab={gotoNextTab}
        gotoBackTab={gotoBackTab}
        gotoEditTab={gotoEditTab}
        onChangeHandler={onChangeHandler}
        onChangeCheckbox={onChangeCheckbox}
        formFields={formFields}
      />
    ));
  return (
    <div>
      <div className="tabs d-flex" style={{ marginBottom: "20px" }}>
        <span style={{ fontSize: "20px" }} role={"button"}>
          <span style={{ color: "#56b280" }}>Cart</span>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            &#10095;
          </span>
        </span>
        {tabs.length > 0 &&
          tabs.map((el, i) => {
            return (
              <div>
                <span style={{ fontSize: "20px" }}>
                  <span
                    role={"button"}
                    style={{
                      color: i + 1 < activeTab.id ? "#56b280" : "black",
                      fontWeight: i + 1 == activeTab.id ? "bold" : "normal",
                    }}
                    onClick={() => i + 1 != activeTab.id && setActiveTab(el)}
                  >
                    {el.name}
                  </span>
                  {tabs.length - 1 != i && (
                    <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                      &#10095;
                    </span>
                  )}
                </span>
              </div>
            );
          })}
      </div>
      {currentTab}
    </div>
  );
}

function Details(props) {
  let navigate = useNavigate();
  const formFields = props.formFields;
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>
          <strong>Contact</strong>
        </h5>
        <p>
          Do you have an account?{" "}
          <span className="text_green fw-bold" role={"button"}>
            Login
          </span>
        </p>
      </div>
      <input
        type={"text"}
        name="contact"
        value={formFields.contact && formFields.contact}
        onChange={(e) => props.onChangeHandler(e)}
        placeholder="Email or mobile phone number"
        className="w-100 py-2 px-2 border_green"
      />
      <p className="m-0 mt-2">
        <input
          type={"checkbox"}
          name="discount"
          checked={formFields.discount && formFields.discount}
          onChange={(e) => props.onChangeCheckbox(e)}
        />{" "}
        <span>Add me to Candleaf newsletter for a 10% discount</span>
      </p>
      <h5 className="mt-5">
        <strong>Shipping Address</strong>
      </h5>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <input
            type={"text"}
            name="name"
            value={formFields.name && formFields.name}
            onChange={(e) => props.onChangeHandler(e)}
            placeholder="Name"
            className="w-100 py-2  px-2 "
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <input
            type={"text"}
            name="secondName"
            value={formFields.secondName && formFields.secondName}
            onChange={(e) => props.onChangeHandler(e)}
            placeholder="Second Name"
            className="w-100 py-2  px-2  "
          />
        </div>
      </div>
      <input
        type={"text"}
        name="address"
        value={formFields.address && formFields.address}
        onChange={(e) => props.onChangeHandler(e)}
        placeholder="Address and number"
        className="w-100 py-2  px-2 mt-3"
      />
      <input
        type={"text"}
        name="shippingNote"
        value={formFields.shippingNote && formFields.shippingNote}
        onChange={(e) => props.onChangeHandler(e)}
        placeholder="Shipping note (optional)"
        className="w-100 py-2  px-2 mt-3"
      />

      <div className="row mt-3">
        <div className="col-xs-12 col-md-4">
          <input
            name="city"
            value={formFields.city && formFields.city}
            onChange={(e) => props.onChangeHandler(e)}
            type={"text"}
            placeholder="City"
            className="w-100 py-2  px-2 "
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <input
            name="postalCode"
            value={formFields.postalCode && formFields.postalCode}
            onChange={(e) => props.onChangeHandler(e)}
            type={"text"}
            placeholder="Postal Code"
            className="w-100 py-2  px-2  "
          />
        </div>
        <div className="col-xs-12 col-md-4 my-auto">
          <select
            className="provinces w-100 py-2 border"
            name="province"
            value={formFields.province && formFields.province}
            onChange={(e) => props.onChangeHandler(e)}
            id="province"
          >
            <option value=" ">Province</option>
            <option value="Punjab">Punjab</option>
            <option value="KPK">KPK</option>
            <option value="Sind">Sind</option>
            <option value="Balochistan">Balochistan</option>
          </select>
        </div>
      </div>
      <select
        className="provinces w-100 mt-3 py-2 border"
        id="country"
        name="country"
        value={formFields.country && formFields.country}
        onChange={(e) => props.onChangeHandler(e)}
      >
        <option value=" ">Country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Russia">Russia</option>
      </select>
      <p className="m-0 mt-2">
        <input
          type={"checkbox"}
          name="saveInfo"
          checked={formFields.saveInfo && formFields.saveInfo}
          onChange={(e) => props.onChangeCheckbox(e)}
        />{" "}
        <span>Save this informations for a future fast checkout</span>
      </p>

      <div className="d-flex justify-content-between mt-5">
        <p
          className="text_green"
          role={"button"}
          onClick={() => navigate("/cart")}
        >
          Back to cart{" "}
        </p>
        <button className="normal_btn" onClick={() => props.gotoNextTab()}>
          Go to shipping
        </button>
      </div>
    </div>
  );
}

function Shipping(props) {
  const formFields = props.formFields;
  return (
    <div className="mt-5">
      <div className="p-4 border rounded">
        <div className="d-flex justify-content-between">
          <p className="m-0">
            <span className="fw-bold me-3"> Contact</span>{" "}
            <span className="text-muted">
              {formFields.contact ? formFields.contact : null}
            </span>
          </p>
          <p
            className="text_green fw-bold m-0"
            role={"button"}
            onClick={() => props.gotoEditTab()}
          >
            Edit
          </p>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <p className="m-0">
            <span className="fw-bold me-3"> Ship To</span>
            <span className="text-muted">
              {formFields.address +
                ", " +
                formFields.postalCode +
                ", " +
                formFields.city +
                ", " +
                formFields.province +
                ", " +
                formFields.country}
            </span>
          </p>
          <p
            className="text_green fw-bold m-0"
            role={"button"}
            onClick={() => props.gotoEditTab()}
          >
            Edit
          </p>
        </div>
      </div>
      <h5 className="my-4 fw-bold">Shipping method</h5>

      <div className="p-4 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">
            <input
              type={"checkbox"}
              name="shippingStandard"
              className="fw-bold me-3"
              checked={
                formFields.shippingStandard && formFields.shippingStandard
              }
              onChange={(e) => props.onChangeCheckbox(e)}
            />{" "}
            <span className="text-muted"> Standard Shipping</span>
          </p>
          <p className="fw-bold m-0">Free</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <p
          className="text_green"
          role={"button"}
          onClick={() => props.gotoBackTab()}
        >
          Back to details
        </p>
        <button className="normal_btn" onClick={() => props.gotoNextTab()}>
          Go to payment
        </button>
      </div>
    </div>
  );
}
function Payment(props) {
  const formFields = props.formFields;
  const [isSuccess, setIsSuccess] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      {!isSuccess && (
        <div>
          <div className="p-4 border rounded">
            <div className="d-flex justify-content-between">
              <p className="m-0">
                <span className="fw-bold me-3"> Contact</span>{" "}
                <span className="text-muted">
                  {formFields.contact ? formFields.contact : null}
                </span>
              </p>
              <p
                className="text_green fw-bold m-0"
                role={"button"}
                onClick={() => props.gotoEditTab()}
              >
                Edit
              </p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <p className="m-0">
                <span className="fw-bold me-3"> Ship To</span>
                <span className="text-muted">
                  {formFields.address +
                    ", " +
                    formFields.postalCode +
                    ", " +
                    formFields.city +
                    ", " +
                    formFields.province +
                    ", " +
                    formFields.country}
                </span>
              </p>
              <p
                className="text_green fw-bold m-0"
                role={"button"}
                onClick={() => props.gotoEditTab()}
              >
                Edit
              </p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <p className="m-0">
                <span className="fw-bold me-3"> Method</span>
                <span className="text-muted">
                  Standard Shipping -{" "}
                  {formFields.shippingStandard ? "FREE" : "PAID"}
                </span>
              </p>
              <p
                className="text_green fw-bold m-0"
                role={"button"}
                onClick={() => props.gotoEditTab()}
              >
                Edit
              </p>
            </div>
          </div>{" "}
          <h5 className="my-4 fw-bold">Payment method</h5>
          <div className="rounded-3 border">
            <div className="w-100 bg_light_green p-4 rounded-top">
              <img src={creditCard} />{" "}
              <strong className="ms-4 text_green">Credit Card</strong>
            </div>

            <div className="p-4">
              <div className="d-flex align-items-center input_icon w-100 my-4">
                <input
                  type={"text"}
                  className="w-100 py-2 px-2 self_input"
                  placeholder="Card Number"
                  name="cardNumber"
                  checked={formFields.cardNumber && formFields.cardNumber}
                  onChange={(e) => props.onChangeHandler(e)}
                />{" "}
                <Lock className="icon" />
              </div>

              <input
                type={"text"}
                className="w-100 py-2 px-2 my-3"
                placeholder="Holder Name"
                name="holderName"
                checked={formFields.holderName && formFields.holderName}
                onChange={(e) => props.onChangeHandler(e)}
              />
              <div className="d-flex justify-content-between">
                <input
                  type={"text"}
                  className="w-50 py-2 px-2"
                  placeholder="Expiration (MM/YY)"
                  name="exp"
                  checked={formFields.cardNumber && formFields.cardNumber}
                  onChange={(e) => props.onChangeHandler(e)}
                />
                <div className="d-flex align-items-center input_icon w-50 my-3 ms-3">
                  <input
                    type={"text"}
                    className="w-100 py-2 px-2 self_input"
                    placeholder="CVV"
                    name="CVV"
                    checked={formFields.CVV && formFields.CVV}
                    onChange={(e) => props.onChangeHandler(e)}
                  />{" "}
                  <Info className="icon" />
                </div>
              </div>
            </div>
          </div>
          <h5 className="my-4 fw-bold">Tax Informations</h5>
          <input
            type={"text"}
            className="w-100 py-2 px-2 my-3"
            placeholder="VAT number  (optional)"
            name="VatNumber"
            checked={formFields.VatNumber && formFields.VatNumber}
            onChange={(e) => props.onChangeHandler(e)}
          />
          <input
            type={"text"}
            className="w-100 py-2 px-2 my-3"
            placeholder="PEC (optional)"
            name="PEC"
            checked={formFields.PEC && formFields.PEC}
            onChange={(e) => props.onChangeHandler(e)}
          />
          <h5 className="my-4 fw-bold">Billing address</h5>
          <form className="p-4 border rounded">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <input
                  type={"radio"}
                  id="same_shipping"
                  name="same_shipping"
                  value={
                    formFields.same_shipping ? formFields.same_shipping : ""
                  }
                  checked={
                    formFields.same_shipping ? formFields.same_shipping : ""
                  }
                  onChange={(e) => props.onChangeCheckbox(e)}
                />{" "}
                <p for="same_shipping" className="m-0 ms-2">
                  Same as the shipping address
                </p>
              </div>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <input
                  type={"radio"}
                  id="differ_shipping"
                  name="differ_shipping"
                  value={
                    formFields.differ_shipping ? formFields.differ_shipping : ""
                  }
                  checked={
                    formFields.differ_shipping ? formFields.differ_shipping : ""
                  }
                  onChange={(e) => props.onChangeCheckbox(e)}
                />{" "}
                <p for="differ_shipping" className="m-0 ms-2">
                  Use a different address for billing
                </p>
              </div>
            </div>
            <hr></hr>
          </form>
          <div className="d-flex justify-content-between mt-5">
            <p
              className="text_green"
              role={"button"}
              onClick={() => props.gotoBackTab()}
            >
              Back to shipping
            </p>
            <button className="normal_btn" onClick={() => setIsSuccess(true)}>
              Pay now
            </button>
          </div>
        </div>
      )}
      {isSuccess && (
        <div className="d-flex flex-column align-items-center">
          <Check className="mt-5" />
          <h5 className="my-4 fw-bold">Payment Confirmed</h5>
          <p>
            Thank you Joe for buying Candleaf. The nature is grateful to you.
            Now that your order is confirmed it will be ready to ship in 2 days.
            Please check your inbox in the future for your order updates.
          </p>
          <button className="normal_btn" onClick={() => navigate("/")}>
            Back to shopping
          </button>
        </div>
      )}
    </div>
  );
}
export default CheckOutForm;
