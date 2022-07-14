import { all, takeLatest } from "redux-saga/effects";

import { ProductsTypes } from "./products/types";
import { addCart, deleteProductInCart, getCart, load } from "./products/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.LOAD_REQUEST, load),
    takeLatest(ProductsTypes.ADD_REQUEST, addCart),
    takeLatest(ProductsTypes.GET_REQUEST, getCart),
    takeLatest(ProductsTypes.DELETE_REQUEST, deleteProductInCart),
  ]);
}
