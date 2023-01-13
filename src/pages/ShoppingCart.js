import React, { Component } from 'react';
import CardCart from '../components/CardCart';

class ShoppingCart extends Component {
  render() {
    const dataStoraged = JSON.parse(localStorage.getItem('productData'));
    return (
      <div>
        { localStorage.getItem('productData')
          ? (
            dataStoraged.map((product) => (<CardCart
              price={ product.price }
              title={ product.title }
              thumbnail={ product.thumbnail }
              key={ product.id }
              productId={ product.id }
            />)))
          : (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio.
            </span>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
