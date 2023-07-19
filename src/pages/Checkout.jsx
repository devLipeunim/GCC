import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "../styles/checkout.css";
const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterRoute, setEnterRoute] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const txRef =
    "GourmetChefCuisine_" + Math.floor(Math.random() * 1000000000 + 1);
  const shippingInfo = [];
  const data = useSelector((state) => state.cart.cartItems);
  console.log(data);
  const cartData = data.map(
    (item) => ({
      name: item.title,
      price: item.price,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
      // image: item.image01,
    })
  );
  console.log(cartData);
  const cartDataInfo = JSON.stringify(cartData);
  console.log(cartDataInfo);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost) + 50;

  const config = {
    public_key: "FLWPUBK_TEST-e9ed7f46854efc95342a0d0a48adf0c6-X",
    tx_ref: txRef,
    amount: totalAmount,
    currency: "NGN",
    redirect_url: "https://gcc-ssa.vercel.app/success.html",
    subaccounts: [
      {
        id: "RS_8219605B02266C5E1B95204AAB066076",
        transaction_charge_type: "percentage",
        transaction_charge: 0,
      },
    ],
    customer: {
      email: enterEmail,
      phone_number: enterNumber,
      name: enterName,
    },
    meta: {
      phone: enterNumber,
      address: enterAddress,
      route: enterRoute,
      itemSelected: cartDataInfo,
      orderNote: orderNote,
    },
    customizations: {
      title: "Gourmet Chef Cuisine",
      description: "Payment for purchase",
      logo: "https://gcc-ssa.vercel.app/gcc-web-logo.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  
  const submitHandler = (e) => {
    e.preventDefault();
    handleFlutterPayment({
      callback: (Response) => {
        console.log(Response);
        closePaymentModal();
      },
      onClose: () => {},
    })
    setEnterAddress("")
    setEnterEmail("")
    setEnterName("")
    setEnterNumber("")
    setEnterRoute("")
    setOrderNote("")
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Delivery Information</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Route"
                    required
                    onChange={(e) => setEnterRoute(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Order note"
                    required
                    onChange={(e) => setOrderNote(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="addTOCart__btn"
                >
                  Pay
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>&#8358;{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Delivery fee: <span>&#8358;{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>&#8358;{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
