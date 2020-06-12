import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop">
                <h1 className="title is-2 is-spaced">Hello Bulma</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
