import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART } from './types';
import { setAlert } from '../actions/alert';
import axios from 'axios';

export const getCart = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user/cart');

    dispatch({
      type: GET_CART,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addToCart = (keyboardId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = {
      keyboardId: keyboardId,
    };

    const response = await axios.put('/api/user/cart', data, config);

    dispatch(setAlert(response.data, 'success'));
  } catch (err) {
    console.log(err.message);
  }
};

export const removeFromCart = (keyboardId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${keyboardId}`);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: keyboardId,
    });

    dispatch(setAlert(response.data, 'success'));
  } catch (err) {
    console.log(err.message);
  }
};
