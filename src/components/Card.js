import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  render() {
    const { price, title, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

Card.propTypes = {
  price: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
};

export default Card;
