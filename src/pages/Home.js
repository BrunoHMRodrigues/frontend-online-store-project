import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Nav from '../components/Nav';

class Home extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <nav>
          { categories
            .map((category) => <Nav name={ category.name } key={ category.id } />) }
        </nav>
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
