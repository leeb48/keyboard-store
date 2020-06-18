import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchProduct } from '../../actions/store';

const SearchBar = ({ title, titleColor, searchProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e) => setSearchTerm(e.target.value);

  const onSearchClick = (searchTerm) => {
    searchProduct(searchTerm);
    setSearchTerm('');
  };

  return (
    <Fragment>
      <div className="level-left">
        <h3 className={`title is-3 has-text-${titleColor}`}>{title}</h3>
      </div>
      <div className="level-right">
        <div className="field has-addons search-bar">
          <div className="control">
            <input
              className="input"
              value={searchTerm}
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="Find Keyboard"
            />
          </div>
          <div className="control">
            <Link
              to="/shop"
              onClick={() => onSearchClick(searchTerm)}
              className="button is-success"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {};

export default connect(null, { searchProduct })(SearchBar);
