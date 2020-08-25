import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import PropductsPage from "./pages/PropductsPage/PropductsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={PropductsPage} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
