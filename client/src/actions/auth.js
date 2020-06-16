import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import axios from 'axios';
import { setAlert } from './alert';

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
