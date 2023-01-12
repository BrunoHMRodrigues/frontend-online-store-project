import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Nav from '../components/Nav';
import Card from '../components/Card';

class Home extends Component {
  state = {
    categorysearch: '',
    categories: [],
    search: '',
    products: [],
    searched: true,
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  handleChangeCategory = ({ target }) => {
    const { value } = target;
    this.setState({
      categorysearch: value,
    }, () => this.handleSearch());
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  handleSearch = async () => {
    const { search, categorysearch } = this.state;
    const response = await getProductsFromCategoryAndQuery(categorysearch, search);
    if (!response.results.length >= 1) {
      this.setState({
        searched: false,
      });
    } else {
      this.setState({
        products: response.results,
        searched: true,
      });
    }
  };

  getID = ({ target }) => {
    // const { value } = target;
    console.log(target);
  };

  render() {
    const { categories, products, searched } = this.state;
    return (
      <div>
        <nav>
          { categories
            .map((category) => (<Nav
              name={ category.name }
              id={ category.id }
              key={ category.id }
              handleChangeCategory={ this.handleChangeCategory }
              onClick={ this.getID }
            />)) }
        </nav>

        <input
          type="text"
          data-testid="query-input"
          placeholder="Procure um produto"
          onChange={ this.handleChange }
        />
        <button type="button" data-testid="query-button" onClick={ this.handleSearch }>
          Pesquisar
        </button>

        <Link data-testid="shopping-cart-empty-message" to="/shoppingcart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>

        { searched ? (
          <div>
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
            { products.map((product) => (
              <Link
                to={ `/product-detail/${product.id}` }
                key={ product.id }
                data-testid="product-detail-link"
                onClick={ this.getID }
              >
                <Card
                  price={ product.price }
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  key={ product.id }
                  id={ product.id }
                />
              </Link>
            )) }
          </div>
        ) : (
          <span data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </span>
        )}
      </div>
    );
  }
}

export default Home;
