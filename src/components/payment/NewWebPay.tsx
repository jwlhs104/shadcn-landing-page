import React, { useRef } from "react";
import { encryptAES256CBC } from "@/lib/utils";
const PaymentForm = ({ amount, currency, children }) => {
  const formRef = useRef(null);

  const startPaymentProcess = () => {
    const testString = "MerchantID=MS127874575&RespondType=String&TimeStamp=1695795410&Version=2.0&MerchantOrderNo=Vanespl_ec_1695795410&Amt=30&ItemDesc=test&NotifyURL=https%3A%2F%2Fwebhook.site%2Fd4db5ad1-2278-466a-9d66-78585c0dbadb"
    const hashKey = "Fs5cX1TGqYM2PpdbE14a9H83YQSQF5jn"
    const hashIv = "C6AcmfqJILwgnhIP"
    const edata = encryptAES256CBC(testString, hashKey, hashIv);
    console.log(edata);
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
        target="_blank"
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

