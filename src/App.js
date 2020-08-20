import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
