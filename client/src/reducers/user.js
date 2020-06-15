import { REGISTER_FAIL, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
  username: null,
  favoriteSwitchType: null,
  token: localStorage.getItem('token'),
  cart: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        payload,
        loading: false,
      };

    default:
      return state;
  }
}
