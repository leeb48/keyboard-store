import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';

const Login = ({ loginUser, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(formData, history);
  };

  return (
    <section className="section login">
      <div className="form-container">
        <h3 className="title is-3">Login</h3>
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-link">Login</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);
