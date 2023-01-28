import {TabNavigator} from './Tab';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
