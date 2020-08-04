import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleShowProductCode = createAction(
  '[Product] Toggle Show Product Code '
);
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Product'
);

//Load Products
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFail = createAction(
  '[Product] Load Products Fail',
  props<{ error: string }>()
);

//Update Product
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFail = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);

//Create Product
export const createProduct = createAction(
  '[Product] Create Product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFail = createAction(
  '[Product] Create Product Fail',
  props<{ error: string }>()
);

//Delete Product
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: number }>()
);
export const deleteProductFail = createAction(
  '[Product] Delete Product Fail',
  props<{ error: string }>()
);
