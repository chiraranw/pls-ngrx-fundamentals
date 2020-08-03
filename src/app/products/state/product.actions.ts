import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleShowProductCode = createAction(
  '[Product] Toggle Show Product Code '
);
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Product'
);

//LOAD Products
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFail = createAction(
  '[Product] Load Products Fail',
  props<{ error: string }>()
);
