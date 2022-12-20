import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import aboutUs from './components/aboutUs';
import Header from './partials/header';
import productList from './components/productsList';
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutUs" component={aboutUs} />
          <Route exact path="/ourProducts" component={productList} />
         </Switch>
        </BrowserRouter>
      </Provider>
</div>
  );
}

export default App;
