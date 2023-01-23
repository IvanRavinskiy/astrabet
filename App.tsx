import React from 'react';
import {PhotosScreen} from './src/screens/PhotosScreen';
import {Provider} from 'react-redux';
import {store} from './src/state';

export const App = () => {
  return (
    <Provider store={store}>
      <PhotosScreen />
    </Provider>
  );
};
