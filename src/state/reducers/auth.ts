import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AUTH, SLICES} from '../../constants/slices';
import {RootState} from '../index';

type AuthState = {
  isAuth: boolean;
};

const SLICE_INITIAL: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: SLICES.AUTH,
  initialState: SLICE_INITIAL,
  reducers: {
    [AUTH.SET_AUTH](state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const {reducer: authReducer} = authSlice;
export const {SET_AUTH} = authSlice.actions;

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
