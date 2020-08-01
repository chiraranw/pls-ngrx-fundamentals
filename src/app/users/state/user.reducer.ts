import { createReducer, on, createAction } from '@ngrx/store';

export const userReducer = createReducer(
  { maskUserName: true },
  on(createAction('[User] toggle masking username'), (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
