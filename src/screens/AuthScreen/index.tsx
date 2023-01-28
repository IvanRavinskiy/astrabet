import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {authScreenStyles} from './styles';
import {useAppDispatch} from '../../state';
import {SET_AUTH} from '../../state/reducers/auth';

export const AuthScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const onEnterPress = () => {
    if (login === 'admin' && password === 'admin') {
      setLogin('');
      setPassword('');
      dispatch(SET_AUTH(true));
    } else {
      setLogin('');
      setPassword('');
      dispatch(SET_AUTH(false));
      Alert.alert('Login or password are incorrect');
    }
  };

  return (
    <SafeAreaView style={authScreenStyles.root}>
      <View style={authScreenStyles.inputContainer}>
        <Text style={authScreenStyles.inputLabel}>Login</Text>
        <TextInput
          value={login}
          onChangeText={setLogin}
          style={authScreenStyles.input}
        />
      </View>
      <View style={authScreenStyles.inputContainer}>
        <Text style={authScreenStyles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={authScreenStyles.input}
        />
      </View>
      <TouchableOpacity style={authScreenStyles.button} onPress={onEnterPress}>
        <Text style={authScreenStyles.inputLabel}>Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
