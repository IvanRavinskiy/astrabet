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
};

const SLICE_INITIAL: PhotoState = {
  photos: [],
};

const photoSlice = createSlice({
  name: SLICES.PHOTO,
  initialState: SLICE_INITIAL,
  reducers: {
    [PHOTO.SET_PHOTO](state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
  },
});

export const {reducer: photoReducer} = photoSlice;
export const {SET_PHOTO} = photoSlice.actions;

export const selectPhotos = (state: RootState) => state.photo.photos;
