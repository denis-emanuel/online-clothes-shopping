import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //cents
  const publishableKey =
    "pk_test_51JxJYjCq9PUKd4jNVmE3DxvzSwFgLKsZb5kDhS2I0RyvltlcQJ8bLHVxGwDQwMQCJFLZeLUdIkQF5767q5p6dxCT00VejiBrVp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shoppinity"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
