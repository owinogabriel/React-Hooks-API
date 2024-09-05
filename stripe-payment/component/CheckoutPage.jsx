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
};
export default CheckoutPage;