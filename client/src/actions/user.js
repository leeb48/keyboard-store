import { LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import { setAlert } from '../actions/alert';
import axios from 'axios';

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
  }
};
