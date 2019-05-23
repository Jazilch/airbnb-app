'use es6';

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ListingsContainer from './ListingsContainer';
import ListingContainer from './ListingContainer';

const Application = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/listings" component={ListingsContainer} />
        <Route path="/listings/:id" component={ListingContainer} />
        <Redirect to="/listings" />
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
