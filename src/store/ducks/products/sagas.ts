import { get, isEmpty } from "lodash";
import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { PARAMETERS_ROUTE } from "../../../utilities/parameters";

import { loadSuccess, loadFailure, addSuccess, addFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(
      api.get,
      `products?page=${PARAMETERS_ROUTE.page}&rows=${PARAMETERS_ROUTE.rows}&sortBy=${PARAMETERS_ROUTE.sortBy}&orderBy=${PARAMETERS_ROUTE.orderBy}`
    );

    yield put(loadSuccess(get(response, "data.products")));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* addCart({payload}: any) {
  const product = get(payload, 'data');
  try {
    const response = localStorage.getItem('@products') || '[]';
    const productsWithStorage = JSON.parse(response);

    if (isEmpty(productsWithStorage) || productsWithStorage.length === 0) {
      localStorage.setItem('@products', JSON.stringify([product]));
      yield put(addSuccess([product]));
      return;
    }

    const alreadyExistsInCard = productsWithStorage.some(productInCart => productInCart.id === product.id);

    if (alreadyExistsInCard) {
      const updatedProduct = productsWithStorage.map(productInCart => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: product.quantity
          }
        }
        return productInCart;
      });
      localStorage.setItem('@products', JSON.stringify(updatedProduct));
      yield put(addSuccess(updatedProduct));
      return;
    }

    const newProducts = [...productsWithStorage, product];
    localStorage.setItem('@products', JSON.stringify(newProducts));
    yield put(addSuccess(newProducts));
  } catch (error) {
    yield put(addFailure());
  }
}

export function* deleteProductInCart({payload}: any) {
  const idProduct = get(payload, 'data');

  try {
    const response = localStorage.getItem('@products') || '[]';
    const productsWithStorage = JSON.parse(response);

    const newProducts = productsWithStorage.filter(product => product.id !== idProduct);

    localStorage.setItem('@products', JSON.stringify(newProducts));

    yield put(addSuccess(newProducts));
  } catch (error) {
    yield put(addFailure());
  }
}

export function* getCart() {
  try {
    const response = localStorage.getItem('@products') || '[]';
    const productsWithStorage = JSON.parse(response);
    yield put(addSuccess(productsWithStorage));
  } catch (error) {
    yield put(loadFailure());
  }
}
