import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const loadUser = () => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth');

    dispatch({
      type: LOAD_USER,
      payload: response.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const loginUser = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/auth/login', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });

    dispatch(setAlert('Login Success', 'success'));

    history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
// Register new user
export const registerUser = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/auth/register', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });

    dispatch(setAlert('Register Successful', 'success'));

    history.push('/');
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });

    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
