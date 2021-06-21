// ------------------------------------
// Imports
// ------------------------------------
// import * as ActionTypes from './ActionType';

import data from '../../../data/products.json'

// ------------------------------------
// Reducer Handlers
// ------------------------------------
export const initialState = {
  productsApiState: {
    isProcessing: false,
    isSuccess: false,
    data: [...data],
  },
};

// ------------------------------------
// Reducer Handlers
// ------------------------------------

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'make_data': {
      const list = [...action.payload];
      const dataById = {};
      list.forEach(item => {
        Object.assign(dataById, { [item.productId]: item });
      });

      return {
        ...state,
        productsApiState: {
          ...state.productsApiState,
          dataById
        }
      }
    }
    default: 
    return state
  }
}
