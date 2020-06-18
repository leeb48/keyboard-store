import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart } from '../../actions/user';
import CartItem from './CartItem';

const DisplayCart = ({ user: { cart, loading }, getCart }) => {
  useEffect(() => {
    getCart();
  }, []);

  const display = cart.map((item) => <CartItem item={item} key={item._id} />);

  return (
    <section className="section">
      <div className="shop">{display}</div>
    </section>
  );
};

DisplayCart.propTypes = {
  user: PropTypes.object.isRequired,
  getCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getCart })(DisplayCart);
