import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UsersScreen} from '../screens/UsersScreen';
import {StackNavigator} from './Stack';
import {ROUTES} from '../constants/screens';
import Users from '../../assets/minifyUsers.svg';
import Photos from '../../assets/minifyPhotos.svg';

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
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#e3d6d8',
      }}>
      <Tab.Screen
        name={ROUTES.USERS}
        component={UsersScreen}
        options={{
          tabBarIcon: ({color}) => <Users style={{backgroundColor: color}} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.STACK}
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <Photos style={{backgroundColor: color}} />,
        }}
      />
    </Tab.Navigator>
  );
};
