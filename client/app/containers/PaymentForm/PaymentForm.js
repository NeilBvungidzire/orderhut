import React, { useContext, useEffect, useReducer, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PayPalButton } from "react-paypal-button-v2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import actions from "../../actions";

const PaymentForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = localStorage.getItem("cart_total");
  const paymentMethod = localStorage.getItem("paymentMethod");

  console.log(props);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <Container>
      <Row>
        <Col lg={8} xl={8} sm={12}>
          <Card>
            <Card.Body>
              <Card.Title>Would you like to complete the purchase?</Card.Title>
              <hr />
              <h3>
                Your total bill will be <strong>USD${totalPrice}</strong>
              </h3>
              <p>Payment Method: {paymentMethod}</p>
              <p style={{ fontSize: "10px" }}>
                Please Fill In The Payment Details Below To Complete Your
                Purchase Order
              </p>
              <hr />
              {paymentMethod === "Stripe" ? (
                <Card.Text>
                  <form onSubmit={handleSubmit}>
                    <CardElement />
                    <br />
                    <hr />
                    <Button
                      type="submit"
                      disabled={!stripe || !elements}
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Confirm Payment
                    </Button>{" "}
                    <Button
                      type="submit"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Cancel Payment
                    </Button>
                  </form>
                </Card.Text>
              ) : (
                <Card.Text>
                  <PayPalButton
                    amount={totalPrice}
                    onSuccess={(details, data) => {
                      alert(
                        "Transaction completed by " +
                          details.payer.name.given_name
                      );
                    }}
                    // options={{
                    //   clientId: "PRODUCTION_CLIENT_ID",
                    // }}
                  />
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        {/* <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Delivery Fees</Col>
                    <Col>$0</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${cartItems}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    orders: state.order.orders,
    searchedOrders: state.order.searchedOrders,
    isLoading: state.order.isLoading,
    advancedFilters: state.order.advancedFilters,
    isOrderAddOpen: state.order.isOrderAddOpen,
  };
};

export default connect(mapStateToProps, actions)(PaymentForm);
