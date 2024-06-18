import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Checkout from "./Checkout/Checkout.jsx";
import Home from "./Home/Home.jsx";
import { Route } from "react-router-dom";
import { StateProvider } from "./Provider/StateProvider.jsx";
import reducer, { initialState } from "./reducer.js";
import Header from "./Header/Header.jsx";
import Login from "./Login/Login.jsx";
import Footer from "./Footer/Footer.jsx";
import Payment from "./Payment/Payment.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3Rv5QmSIB3N0Pbsc7TtbQiJivaOi00X9sIbazL"
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={[<Header />, <Home />, <Footer />]}></Route>
      <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
      <Route
        path="/payment"
        element={[
          <Header />,
          <Elements stripe={promise}>
            <Payment />
          </Elements>,
        ]}
      ></Route>

      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StateProvider>
  </React.StrictMode>
);
