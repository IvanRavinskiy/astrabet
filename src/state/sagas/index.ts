import {takeLatest} from 'redux-saga/effects';
import {GET_PHOTO} from '../reducers/photo';
import {GET_USER} from '../reducers/user';
import {users} from './users';
import {photos} from './photos';

export function* rootSaga() {
  yield takeLatest(GET_USER.type, users);
  yield takeLatest(GET_PHOTO.type, photos);
}
