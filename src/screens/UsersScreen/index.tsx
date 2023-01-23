import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {UserCard} from './components/UserCard';

export const UsersScreen = () => {
  return (
    <SafeAreaView>
      <Text>Users</Text>
      <UserCard />
    </SafeAreaView>
  );
};
