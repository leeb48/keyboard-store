import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/user';

const ProductItem = ({
  keyboard: { img, name, description, price, inStock, _id },
  addToCart,
}) => {
  return (
    <div className="card shop-card">
      <div className="card-image">
        <figure className="image">
          <img src={img} alt="keyboard" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6">
              {name} : {description}
            </p>
          </div>
        </div>
        <div className="content">
          {inStock ? (
            <Fragment>
              <p className="is-size-5 price">{price}</p>

              <button
                onClick={() => addToCart(_id)}
                className="button is-info is-rounded"
              >
                Add To Cart
              </button>
            </Fragment>
          ) : (
            <p className="subtitle is-5">Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {};

export default connect(null, { addToCart })(ProductItem);
