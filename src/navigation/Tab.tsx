import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UsersScreen} from '../screens/UsersScreen';
import {StackNavigator} from './Stack';
import {ROUTES} from '../constants/screens';

type TabParamList = {
  [ROUTES.USERS]: undefined;
  [ROUTES.STACK]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={ROUTES.USERS}
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
        }}
      />
      <Tab.Screen
        name={ROUTES.STACK}
        component={StackNavigator}
        options={{
          tabBarLabel: 'Photos',
        }}
      />
    </Tab.Navigator>
  );
};
