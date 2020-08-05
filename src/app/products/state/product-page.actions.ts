import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleShowProductCode = createAction(
  '[Product Page] Toggle Show Product Code '
);
export const setCurrentProduct = createAction(
  '[Product Page] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product Page] Initialize Product'
);

//Load Products
export const loadProducts = createAction('[Product Page] Load Products');

//Update Product
export const updateProduct = createAction(
  '[Product Page] Update Product',
  props<{ product: Product }>()
);

//Create Product
export const createProduct = createAction(
  '[Product Page] Create Product',
  props<{ product: Product }>()
);

//Delete Product
export const deleteProduct = createAction(
  '[Product Page] Delete Product',
  props<{ productId: number }>()
);
