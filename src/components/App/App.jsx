import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Select from '../Select/Select'
import Orders from '../Orders/Orders'
// import { store } from './redux/store';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
