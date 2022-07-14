import { action } from 'typesafe-actions';
import { IProduct } from '../../../utilities/types';
import { IProductCart, ProductsTypes } from './types';

export const loadRequest = () => action(ProductsTypes.LOAD_REQUEST);

export const loadSuccess = (data: IProduct[]) => action(ProductsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);

export const addRequest = (data: IProductCart) => action(ProductsTypes.ADD_REQUEST, { data });

export const getRequest = () => action(ProductsTypes.GET_REQUEST);

export const deleteRequest = (data: number) => action(ProductsTypes.DELETE_REQUEST, { data });

export const addSuccess = (data: IProductCart[]) => action(ProductsTypes.ADD_SUCCESS, { data });

export const addFailure = () => action(ProductsTypes.ADD_FAILURE);
