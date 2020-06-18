import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({
  item: { img, name, description, price, inStock, _id },
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

              <button className="button is-danger is-rounded">
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

export default CartItem;
