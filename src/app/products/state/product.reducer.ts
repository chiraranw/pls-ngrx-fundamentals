import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';

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
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleShowProductCode, (state: ProductState) => {
    console.log('[Product] Toggle Product Code', state.showProductCode);
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductActions.setCurrentProduct, (state: ProductState, action) => {
    return {
      ...state,
      currentProduct: action.product,
    };
  }),
  on(ProductActions.clearCurrentProduct, (state: ProductState) => {
    return {
      ...state,
      currentProduct: null,
    };
  }),
  on(ProductActions.initializeCurrentProduct, (state: ProductState) => {
    return {
      ...state,
      currentProduct: {
        id: 0,
        productCode: 'New',
        productName: null,
        starRating: null,
        description: '',
      },
    };
  }),
  on(
    ProductActions.loadProductsFail,
    (state, action): ProductState => {
      return {
        ...state,
        products: [],
        error: action.error,
      };
    }
  ),
  on(
    ProductActions.loadProductsSuccess,
    (state, action): ProductState => {
      return {
        ...state,
        products: action.products,
        error: '', //clearing this prop of subseq values!
      };
    }
  )
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

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.error
);
