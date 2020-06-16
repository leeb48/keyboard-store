import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ title, titleColor }) => {
  return (
    <Fragment>
      <div className="level-left">
        <h3 className={`title is-3 has-text-${titleColor}`}>{title}</h3>
      </div>
      <div className="level-right">
        <div className="field has-addons search-bar">
          <div className="control">
            <input className="input" type="text" placeholder="Find Keyboard" />
          </div>
          <div className="control">
            <a className="button is-success">Search</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
