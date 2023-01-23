import {call} from 'redux-saga/effects';

export function* photos() {
  try {
  } catch (err) {
    yield call(console.log, `saga photos error: ${err}`);
  }
}
