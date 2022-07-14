import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  productsWithCart: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ProductsTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case ProductsTypes.ADD_REQUEST:
      return { ...state, loading: true, productsWithCart: action.payload.data };
    case ProductsTypes.ADD_SUCCESS:
      return {
      ...state, loading: false, error: false, productsWithCart: action.payload.data,
      };
    case ProductsTypes.ADD_FAILURE:
      return {
      ...state, loading: false, error: true, productsWithCart: [],
      };
    default:
      return state;
  }
};

export default reducer;
