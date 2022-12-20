/**
 *
 * Checkout
 *
 */

import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../Common/Button";

const Checkout = (props) => {
  const history = useHistory();
  const { authenticated, handleShopping, handleCheckout, placeOrder } = props;

  const handlePayment = () => {
    history.push("/payment-method");
  };

  return (
    <div className="easy-checkout">
      <div className="checkout-actions">
        <Button
          variant="primary"
          text="Continue shopping"
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant="primary"
            text="Place Order"
            onClick={() => placeOrder()}
          />
        ) : (
          <Button
            variant="primary"
            text="Proceed To Checkout"
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
