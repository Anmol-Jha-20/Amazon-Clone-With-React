import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../Provider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer.js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1234 Delhi Lane</p>
            <p>Noida, UP</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

// import React, { useEffect, useState } from "react";
// import "./Payment.css";
// import { useStateValue } from "../Provider/StateProvider";
// import CheckoutProduct from "../Checkout/CheckoutProduct";
// import { Link, useNavigate } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "../reducer.js";
// import axios from "../axios.js";

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState();

//   useEffect(() => {
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };
//     getClientSecret();
//   }, [basket]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentTntent }) => {
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);
//         // history.replace("/orders");
//         navigate("/orders", { replace: true });
//       });
//   };
//   const handleChange = (event) => {
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };
//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//         </h1>

//         {/* Payment section - delivery address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>1234 Delhi Lane</p>
//             <p>Noida, UP</p>
//           </div>
//         </div>

//         {/* Payment section - Review Items */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Payment section - Payment method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             {/*Stripe functionality will go here */}
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />
//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => (
//                     <>
//                       <h3>Order Total: {value}</h3>
//                     </>
//                   )}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
