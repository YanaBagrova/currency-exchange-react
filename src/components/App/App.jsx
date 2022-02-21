import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Clock from "../Clock/Clock";
import Select from '../Select/Select'
import Orders from '../Orders/Orders'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Clock />
          <Select />
        </Route>
        <Route exact path="/requests">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
