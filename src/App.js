import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/product-detail/:id" component={ ProductDetail }/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
