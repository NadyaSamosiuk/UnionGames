import React, { useState } from 'react'
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import '../src/css/style.css'

import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Context from './components/Context';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';

function App() {
  const [cart, setCart]=useState(JSON.parse(localStorage.getItem('cart')) || [])

  return (
    <Context.Provider value = {{cart, setCart}}>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/homepage'>
            <HomePage/>
          </Route>
          <Route path='/catalog'>
            <Shop/>
          </Route>
          <Route path='/product_:id'>
            <ProductCard/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
