import React from "react";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/products/:productId" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
