import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

const Register = ({ registerUser, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    favoriteSwitchType: '',
  });

  const [isValidPassword, setIsValidPassword] = useState(true);

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();

    registerUser(formData, history);
  };

  const { username, password, favoriteSwitchType } = formData;

  return (
    <Fragment>
      <section className="section register">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-container">
            <h3 className="title is-3">Register</h3>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${formData.username ? 'is-success' : null}`}
                  type="text"
                  placeholder="Text input"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${isValidPassword ? null : 'is-danger'} `}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="5"
                  onInvalid={() => setIsValidPassword(false)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">
                Favorite Type of Mechanical Switch
              </label>
              <div className="control">
                <div className="select">
                  <select
                    value={favoriteSwitchType}
                    name="favoriteSwitchType"
                    onChange={(e) => onChange(e)}
                  >
                    <option>None</option>
                    <option>Linear</option>
                    <option>Tactile</option>
                    <option>Clicky</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary is-light">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, { registerUser })(Register);
