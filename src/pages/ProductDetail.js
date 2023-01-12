import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductDetail extends Component {
  state = {
    products: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const getProducts = await getProductById(id);

    this.setState({
      products: getProducts,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {' '}
          { products.title}
        </h3>
        <img
          data-testid="product-detail-image"
          src={ products.thumbnail }
          alt={ products.title }
        />
        <p data-testid="product-detail-price">{ products.price }</p>
        <Link to="/shoppingcart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
