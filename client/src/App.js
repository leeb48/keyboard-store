import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import ProductDisplay from './components/product-display/ProductDisplay';
import Register from './components/forms/Register';
import Alert from './components/alerts/Alert';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Alert />
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
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
