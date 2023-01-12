import React, { Component } from 'react';
import CardCart from '../components/CardCart';

class ShoppingCart extends Component {
  render() {
    const dataStoraged = JSON.parse(localStorage.getItem('productData'));
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio.
        </span>
        { dataStoraged.map((product) => (<CardCart
          price={ product.price }
          title={ product.title }
          thumbnail={ product.thumbnail }
          key={ product.id }
          productId={ product.id }
        />)) }
      </div>
    );
  }
}

export default ShoppingCart;
