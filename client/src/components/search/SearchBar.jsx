import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ title, titleColor }) => {
  return (
    <Fragment>
      <div class="level-left">
        <h3 class={`title is-3 has-text-${titleColor}`}>{title}</h3>
      </div>
      <div class="level-right">
        <div class="field has-addons search-bar">
          <div class="control">
            <input class="input" type="text" placeholder="Find Keyboard" />
          </div>
          <div class="control">
            <a class="button is-success">Search</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
