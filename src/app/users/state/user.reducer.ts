import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { User } from '../user';

export interface UsersState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UsersState = {
  maskUserName: true,
  currentUser: null,
};

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] toggle masking username'), (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);

//Selectors
const getUsersState = createFeatureSelector<UsersState>('users');
export const getMaskUserName = createSelector(
  getUsersState,
  (state) => state.maskUserName
);
export const getCurrentUser = createSelector(
  getUsersState,
  (state) => state.currentUser
);
