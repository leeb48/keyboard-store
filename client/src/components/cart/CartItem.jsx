import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/user';

const CartItem = ({
  item: { img, name, description, price, inStock, _id },
  removeFromCart,
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
                onClick={() => removeFromCart(_id)}
                className="button is-danger is-rounded"
              >
                Remove From Cart
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

CartItem.propTypes = {};

export default connect(null, { removeFromCart })(CartItem);
