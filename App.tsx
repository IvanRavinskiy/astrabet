import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/state';
import {RootNavigation} from './src/navigation';

export const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
