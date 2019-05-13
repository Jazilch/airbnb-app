'use es6';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListingsContainer from './ListingsContainer';
import ListingContainer from './ListingContainer';

const Application = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/listings" component={ListingsContainer} />
        <Route path="/listings/:id" component={ListingContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
