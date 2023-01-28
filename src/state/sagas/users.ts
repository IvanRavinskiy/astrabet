import {call, put} from 'redux-saga/effects';
import {api} from '../../api';
import {SET_USER, User} from '../reducers/user';

export function* users() {
  try {
    const data: User[] = yield call(api.getUsers);
    yield put(SET_USER(data));
  } catch (err) {
    yield call(console.log, `saga users error: ${err}`);
  }
}
