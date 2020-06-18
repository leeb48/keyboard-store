import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

const Navbar = ({ user: { isAuthenticated }, logoutUser }) => {
  const authButtons = (
    <div>
      <Link className="button is-info" to="/cart">
        <i
          // TODO: Causes error when icon is used
          // className="fas fa-shopping-cart"
          style={{ marginRight: '.5rem' }}
        ></i>
        Cart
      </Link>

      <Link to="/" onClick={logoutUser} className="button is-danger">
        Log Out
      </Link>
    </div>
  );

  const guestButtons = (
    <div>
      <Link className="button is-primary" to="/register">
        <strong>Sign up</strong>
      </Link>
      <Link className="button is-link" to="/login">
        Log in
      </Link>
    </div>
  );

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <i className="far fa-keyboard"></i>
              Keyboard Land
            </h1>
            <h2 className="subtitle">Find Your Perfect Board</h2>
          </div>
        </div>
      </section>

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/shop">
              Shop
            </Link>

            <Link className="navbar-item" to="/incoming">
              Incoming Stock
            </Link>
            <Link className="navbar-item" to="new-arrival">
              New Arrival
            </Link>

            <Link className="navbar-item" to="/sell">
              Sell Your Keyboard
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isAuthenticated ? authButtons : guestButtons}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
