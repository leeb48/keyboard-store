import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
  LOG_OUT,
  GET_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART,
} from '../actions/types';

const initialState = {
  username: null,
  favoriteSwitchType: null,
  token: localStorage.getItem('token'),
  cart: [],
  loading: true,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
    case LOAD_USER:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case GET_CART:
      return {
        ...state,
        cart: payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload),
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOG_OUT:
      localStorage.setItem('token', null);
      return {
        ...state,
        username: null,
        favoriteSwitchType: null,
        token: null,
        isAuthenticated: false,
        cart: [],
        loading: false,
      };

    default:
      return state;
  }
}
