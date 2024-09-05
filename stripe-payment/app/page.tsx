import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { error } from "console";

// import CheckoutForm from "../components/CheckoutForm";()
// import CompletePage from "../components/CompletePage";

if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  return (
  <main></main>
  );
}
