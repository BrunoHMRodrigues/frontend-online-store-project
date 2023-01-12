import React, { Component } from 'react';
import propTypes from 'prop-types';

class Nav extends Component {
  render() {
    const { name, id, handleChangeCategory } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          <input
            name="category"
            value={ id }
            id={ name }
            type="radio"
            data-testid="category"
            onClick={ handleChangeCategory }
          />
          { name }
        </label>
      </div>
    );
  }
}

Nav.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  handleChangeCategory: propTypes.func.isRequired,
};

export default Nav;
