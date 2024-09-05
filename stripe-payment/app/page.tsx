"use client"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { error } from "console";
import convertTosubcurrency from "@/lib/convertToSubcurrency"
// import CheckoutForm from "../components/CheckoutForm";()
// import CompletePage from "../components/CompletePage";
import CheckoutPage from "@/components/CheckoutPage";


if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const amount = 49.99;
  return (
  <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
    <div className="mb-10">
      <div className="text-4xl font-extrabold mb-2">Gabriel    
        <h2 className="text-2xl">
        has requested <span className="font-bold">${amount}</span>
      </h2>
      </div>
      </div>
      <Elements stripe={stripePromise}
                options={{
                  mode:"payment",
                  amount: convertTosubcurrency(amount),
                  currency:"usd"
                }} >
        <CheckoutPage amount= {amount} />
      </Elements>
       </main>
  );
}
