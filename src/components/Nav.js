import React, { Component } from 'react';
import propTypes from 'prop-types';

class Nav extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          <input
            name="category"
            value={ name }
            id={ name }
            type="radio"
            data-testid="category"
          />
          { name }
        </label>
      </div>
    );
  }
}

Nav.propTypes = {
  name: propTypes.string.isRequired,
};

export default Nav;
