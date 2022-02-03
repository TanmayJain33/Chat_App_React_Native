import {LOADING_START, LOADING_STOP} from './actionTypes';

export default function loaderReducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
