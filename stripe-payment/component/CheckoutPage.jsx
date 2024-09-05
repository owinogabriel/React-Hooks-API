import React ,{useEffect, useState} from 'react';
import{
  useStripe,
  useElement,
  PaymentElement,
}from "@stripe/react-stripe-js"
import covertToSubcurrency from "@/lib/converToSubcurrency"

const CheckoutPage = ({amount}, { amount: number }) =>{
  const stripe = useState();
  const elements = useElements();

  const [errorMessage, setError] =useStete <string>('');
  const [clientSecret, setClientSecret] =useStete('');
  const [loading, setlLoading] =useStete<string>(false);
 useEffect (() =>{
  fetch("/api/create-payment-intent",{
    method:"POST",
    headers:{
      "content-Type": "application/json",
    },
    body:JSON.stringify({amount: convertToSubcurrency(amount)}),
  })
  .then((res) => res.json())
  .then((data) => setClientSecret(data.clientSecret))
 },[amount])

};
export default CheckoutPage;