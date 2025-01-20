import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: string | JSX.Element | JSX.Element[]
}
type NewebPayData = {
  [key: string]: string; // Assume all values in the data are strings
};

const PaymentForm = ({ children }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [neWebPayData, setNewebPayData] = useState<NewebPayData>({})
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

      <Button className="w-full" onClick={startPaymentProcess}>
        {children}
      </Button>
    </div>
  );
};

export default PaymentForm;

