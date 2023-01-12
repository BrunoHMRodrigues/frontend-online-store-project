import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        { id }
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
