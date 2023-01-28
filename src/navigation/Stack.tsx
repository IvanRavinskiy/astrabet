import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhotosScreen} from '../screens/PhotosScreen';
import {AuthScreen} from '../screens/AuthScreen';
import {useAppSelector} from '../state';
import {selectIsAuth} from '../state/reducers/auth';
import {ROUTES} from '../constants/screens';

type StackParamList = {
  [ROUTES.PHOTOS]: undefined;
  [ROUTES.AUTH]: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
export const StackNavigator = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuth ? (
        <Stack.Screen name={ROUTES.PHOTOS} component={PhotosScreen} />
      ) : (
        <Stack.Screen name={ROUTES.AUTH} component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};
