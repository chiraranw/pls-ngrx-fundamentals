import { createReducer, on, createAction } from '@ngrx/store';

export const productReducer = createReducer(
  { showProduct: true },
  on(createAction('[Product] Toggle Product Code'), (state) => {
    console.log('[Product] Toggle Product Code', state.showProduct);
    return {
      ...state,
      showProduct: !state.showProduct,
    };
  })
);
