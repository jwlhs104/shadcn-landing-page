import React, { useRef, useEffect, useState } from "react";

const PaymentForm = ({ amount, currency, children }) => {
  const formRef = useRef(null);
  const [neWebPayData, setNewebPayData] = useState({})
  useEffect(() => {
    fetch("/api/createOrder")
      .then(res=>res.json())
      .then(data=>setNewebPayData(data))
  }, [])

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
        {
          Object.entries(neWebPayData).map(([key, value], index)=>(
            <input key={index} type="hidden" name={key} value={value}/>
          ))
        }
      </form>

      <button onClick={startPaymentProcess}>
        {children}
      </button>
    </div>
  );
};

export default PaymentForm;

