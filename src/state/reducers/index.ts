import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './auth';
import {photoReducer} from './photo';
import {userReducer} from './user';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  photo: photoReducer,
});
