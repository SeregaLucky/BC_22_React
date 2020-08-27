import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import { router } from '../servises/router';
import FormPage from '../pages/FormPage/FormPage';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={router.HOME_PAGE} component={HomePage} />
        <Route path={router.FORM_PAGE} component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
