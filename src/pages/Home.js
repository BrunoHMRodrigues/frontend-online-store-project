import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>

        <Link data-testid="shopping-cart-empty-message" to="/shoppingcart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
