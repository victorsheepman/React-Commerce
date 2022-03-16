import React, { useState } from 'react'
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_);

export const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });
        setLoading(true);
    
        if (!error) {
          // console.log(paymentMethod)
          const { id } = paymentMethod;
            try {
                const { data } = await axios.post(
                    "http://localhost:3001/api/checkout",
                    {
                        id,
                        amount: 10000, //cents
                    }
                );
                console.log(data);
                elements.getElement(CardElement).clear();
            } 
            catch (error) {
                console.log(error);
            }
          setLoading(false);
        }
    };
  return (
    <Elements stripe={stripePromise}>
      <form className='checkoutForm' onSubmit={handleSubmit}>
      
      
      </form>

    </Elements>
  )
}
