import {takeLatest} from 'redux-saga/effects';
import {SET_PHOTO} from '../reducers/photo';
import {SET_USER} from '../reducers/user';
import {users} from './users';
import {photos} from './photos';

export function* rootSaga() {
  yield takeLatest(SET_USER.type, users);
  yield takeLatest(SET_PHOTO.type, photos);
}
