import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import './Pay.css'
import axios from 'axios';

export default function Pay() {
    const [stripToken, setStripToken] = useState(null)

    const onToken = (token) => {
        console.log(token);
        setStripToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId: stripToken.id,
                    amount:1000000

               })
               console.log(res.data);
               
            } catch (err) { console.log(err); }
        }
        stripToken && makeRequest()
    }, [stripToken]);

    const KEY = "pk_test_51MJDJ2A88ZrHsmG3lda0uKGWSESwqOXfqaAuOhuZwRp0ASZXmFjtTneCOrK6dGeFZxqIJKrSoqLB10214Ozovenc00Hjl8sR3W"
    return (
        <div className="rectangle">

            <StripeCheckout
                name="aits Shop" // the pop-in header title
                description="Your total is 20$" // the pop-in header subtitle
                image="https://aitsonline.de/static/media/logo.5bc0527a1ffd73bb6271.webp"
                shippingAddress
                billingAddress={false}
                amount={1000000} // cents
                token={onToken} // submit callback
                stripeKey={KEY}
            >

                <button type="submit">Pay With Card!</button>
            </StripeCheckout>
        </div>
    )
}
