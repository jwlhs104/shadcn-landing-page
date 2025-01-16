import React, { useRef } from "react";

const PaymentForm = ({ amount, currency, children }) => {
  const formRef = useRef(null);

  const startPaymentProcess = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        method="POST"
        action="https://ccore.newebpay.com/MPG/mpg_gateway"
        style={{ display: "none" }}
      >
        <input type="hidden" name="MerchantID" value="MS17361556"/>
        <input type="hidden" name="currency" value={currency} />
      </form>

      <button onClick={startPaymentProcess}>
        {children}
      </button>
    </div>
  );
};

export default PaymentForm;

