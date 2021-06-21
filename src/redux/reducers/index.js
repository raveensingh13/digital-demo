import { combineReducers } from 'redux';
import productsReducer from '../../views/Products/Redux/Reducer';

const combinedReducers = combineReducers({
  products: productsReducer
});

const rootReducer = (state, action) => combinedReducers(state, action);
export default rootReducer;
