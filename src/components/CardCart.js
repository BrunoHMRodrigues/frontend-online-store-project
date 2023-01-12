import React, { Component } from 'react';
import propTypes from 'prop-types';

class CardCart extends Component {
  render() {
    const { price, title, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

CardCart.propTypes = {
  price: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
};

export default CardCart;
