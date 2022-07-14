import { IProduct } from "../../../utilities/types"

/**
 * Action types
 */
export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCCES = '@products/LOAD_SUCCCES',
  LOAD_FAILURE = '@products/LOAD_FAILURE',

  ADD_REQUEST = '@products/ADD_REQUEST',
  ADD_SUCCESS = '@products/ADD_SUCCCES',
  ADD_FAILURE = '@products/ADD_FAILURE',

  GET_REQUEST = '@products/GET_REQUEST',
  DELETE_REQUEST = '@products/DELETE_REQUEST'

}

export interface IProductCart extends IProduct {
  quantity: number;
}

/**
 * State type
 */
export interface ProductsState {
  readonly data: IProduct[]
  readonly productsWithCart: IProduct[]
  readonly loading: boolean
  readonly error: boolean
}
