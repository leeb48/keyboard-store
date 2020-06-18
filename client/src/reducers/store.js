import { GET_PRODUCT, POST_PRODUCT, SEARCH_PRODUCT } from '../actions/types';

const initialState = {
  keyboards: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
    case POST_PRODUCT:
    case SEARCH_PRODUCT:
      return {
        ...state,
        keyboards: payload,
        loading: false,
      };

    default:
      return state;
  }
}
