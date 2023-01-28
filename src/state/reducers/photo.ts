import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PHOTO, SLICES} from '../../constants/slices';
import {RootState} from '../index';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type PhotoState = {
  photos: Photo[];
  page: number;
};

const SLICE_INITIAL: PhotoState = {
  photos: [],
  page: 1,
};

const photoSlice = createSlice({
  name: SLICES.PHOTO,
  initialState: SLICE_INITIAL,
  reducers: {
    [PHOTO.GET_PHOTO](state, action: PayloadAction<number>) {
      state.photos = [];
      state.page = action.payload;
    },
    [PHOTO.SET_PHOTO](state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
  },
});

export const {reducer: photoReducer} = photoSlice;
export const {GET_PHOTO, SET_PHOTO} = photoSlice.actions;

export const selectPage = (state: RootState) => state.photo.page;
export const selectPhotos = (state: RootState) => state.photo.photos;
