import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import ProductDisplay from './components/product-display/ProductDisplay';
import Register from './components/forms/Register';
import Alert from './components/alerts/Alert';
import Login from './components/forms/Login';

// UTILITY
import store from './store';
import setAuthHeaders from './utils/setAuthHeader';
import { loadUser } from './actions/auth';
import SellForm from './components/forms/SellForm';
import PrivateRoute from './components/routing/PrivateRoute';
import DisplayCart from './components/cart/DisplayCart';

setAuthHeaders(localStorage.token);

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductDisplay
                title="Featured Items"
                productType="featured"
                titleColor="info"
              />
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => <ProductDisplay title="Shop" titleColor="primary" />}
          />
          <Route
            exact
            path="/incoming"
            render={() => (
              <ProductDisplay
                title="Incoming Stock"
                productType="incoming"
                titleColor="dark"
              />
            )}
          />
          <Route
            exact
            path="/new-arrival"
            render={() => (
              <ProductDisplay
                title="New Arrival"
                productType="new-arrival"
                titleColor="success"
              />
            )}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/sell" component={SellForm} />
          <PrivateRoute exact path="/cart" component={DisplayCart} />
        </Switch>
        <Alert />
      </Router>
    </Fragment>
  );
}

export default App;
