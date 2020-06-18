import { GET_PRODUCT, SEARCH_PRODUCT } from './types';
import axios from 'axios';

export const fetchProduct = (productType) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/store/${productType}`);

    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const postProduct = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post('/api/store/sellkeyboard', formData, config);

    history.push('/new-arrival');
  } catch (err) {
    console.log(err.message);
  }
};

export const searchProduct = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/store/search/${searchTerm}`);

    dispatch({
      type: SEARCH_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
