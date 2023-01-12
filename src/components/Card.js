import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  handleCart = async () => {
    const { data } = this.props;
    const productData = data;
    if (localStorage.getItem('productData')) {
      const dataStoraged = JSON.parse(localStorage.getItem('productData'));
      dataStoraged.push(productData);
      localStorage.setItem('productData', JSON.stringify(dataStoraged));
    } else {
      localStorage.setItem('productData', JSON.stringify([productData]));
    }
  };

  render() {
    const { price, title, thumbnail, productId } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleCart }
          productId={ productId }
          // data={ data }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  price: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  productId: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
};

export default Card;
