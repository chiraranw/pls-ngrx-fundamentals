import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import { createFeatureReducerFactory } from '@ngrx/store/src/utils';

/**
 * Exposing the Global State will all the states,
 * This Type is what we use to Strongly type.
 * This way we protect our lazily loaded product feature so that we don't
 * have imports in any other module
 */
export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state: ProductState) => {
    console.log('[Product] Toggle Product Code', state.showProductCode);
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);

//Selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  (state) => state.currentProduct
);
export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);
