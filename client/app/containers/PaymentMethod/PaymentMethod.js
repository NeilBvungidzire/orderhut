import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function PaymentMethod() {
  const history = useHistory();
  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethodName || "PayPal"
  );
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentMethod", paymentMethodName);
    history.push("/payment");
  };
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h5 className="my-3">Please Choose Your Payment Method Below</h5>
      <Form onSubmit={submitHandler}>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === "PayPal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === "Stripe"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Paynow"
            label="Paynow"
            value="Paynow"
            checked={paymentMethodName === "Paynow"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Button type="submit" style={{ backgroundColor: "red" }}>
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PaymentMethod;
