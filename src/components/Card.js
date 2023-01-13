import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { price, title, thumbnail, productId, data } = this.props;
    return (
      <div>
        <Link
          to={ `/product-detail/${data.id}` }
          key={ data.id }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleCart }
          productId={ productId }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  price: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  productId: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
};

export default Card;
