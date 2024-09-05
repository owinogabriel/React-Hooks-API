import {NextRequest, NextResponse} from "next/server"
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
export async function Post(request: NextRequest) {
 try{
  const {amount} = await request.json();

  const paymentIntent = await stripe.paymentInent.create({
    amount:amount,
    currency:"usd",
    automatic_payment_method:{enabled: true},
  });

  return NextResponse.json ({ clientSecret: paymentIntent.client_secret});
 } catch (error){
  console.error("Internal Error", error)
  // Handle other errors (e.g., network issues, parsing error)
  return NextResponse.json(
    {error:`Inter Server Error: ${error}`},
    {status:500}
  )
 }
} 


