import { createReducer, on, createAction } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

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

export const productReducer = createReducer<ProductState>(
  { showProductCode: true } as ProductState,
  on(createAction('[Product] Toggle Product Code'), (state: ProductState) => {
    console.log('[Product] Toggle Product Code', state.showProductCode);
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
