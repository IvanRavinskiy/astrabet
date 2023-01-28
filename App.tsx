import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/state';
import {PhotosScreen} from './src/screens/PhotosScreen';

export const App = () => {
  return (
    <Provider store={store}>
      <PhotosScreen />
    </Provider>
  );
};
