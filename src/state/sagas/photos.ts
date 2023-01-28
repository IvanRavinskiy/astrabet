import {call, put, select} from 'redux-saga/effects';
import {Photo, selectPage, SET_PHOTO} from '../reducers/photo';
import {api} from '../../api';

export function* photos() {
  try {
    const page: number = yield select(selectPage);
    const data: Photo[] = yield call(api.getPhotos, page);
    yield put(SET_PHOTO(data));
  } catch (err) {
    yield call(console.log, `saga photos error: ${err}`);
  }
}
