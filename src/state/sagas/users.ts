import {call} from 'redux-saga/effects';

export function* users() {
  try {
  } catch (err) {
    yield call(console.log, `saga users error: ${err}`);
  }
}
