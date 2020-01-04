import {
    SET_LOADING,
    GET_CONTRIBUTORS,
    GET_CONTRIBUTOR
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CONTRIBUTORS:
        return {
          ...state,
          contributors: action.payload,
          loading: false
        };
      case GET_CONTRIBUTOR:
        return {
          ...state,
          contributor: action.payload,
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  };
  