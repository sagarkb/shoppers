import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import Banner from "./components/Banner/Banner";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/primevideos" exact>
            <Header />
            <Banner />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" exact>
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//₹
//https://shoppers-sagar.web.app/
