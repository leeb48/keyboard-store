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
              <ProductDisplay title="Featured Items" titleColor="info" />
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
              <ProductDisplay title="Incoming Stock" titleColor="dark" />
            )}
          />
          <Route
            exact
            path="/new-arrival"
            render={() => (
              <ProductDisplay title="New Arrival" titleColor="success" />
            )}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Alert />
      </Router>
    </Fragment>
  );
}

export default App;
