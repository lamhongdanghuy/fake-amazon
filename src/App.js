import "./App.css";
import Header from "./Header";
import { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JW7hjBt7rglUkGs1TwMIbY0UMGY97lrLqIwknny0cHCiwyiXxMMjEzkq4LGu8eo9marGxTdn7jA8c8a4YxjoXTo00yUIm91K9"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

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
    <Router>
      <div className="app">
        <Switch>
          <Route exact component={Login} path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact component={Login} path="/login">
            <Login />
          </Route>
          <Route exact component={Checkout} path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact component={Payment} path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact component={Home} path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
