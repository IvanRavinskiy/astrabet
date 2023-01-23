import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SLICES, USER} from '../../constants/slices';
import {RootState} from '../index';

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
type Geo = {
  lat: string;
  lng: string;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type UserState = {
  users: User[];
};

const SLICE_INITIAL: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: SLICES.USER,
  initialState: SLICE_INITIAL,
  reducers: {
    [USER.SET_USER](state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const {reducer: userReducer} = userSlice;
export const {SET_USER} = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;
