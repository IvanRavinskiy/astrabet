import React, {useCallback} from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {Photo} from './components/Photo';
import {Search} from './components/Search';

export const PhotosScreen = () => {
  const onSearchPage = useCallback((pageNumber: number) => {
    if (pageNumber > 100) {
      Alert.alert('Attention', 'Max count is 100');
      return;
    }
    Alert.alert(`Searching ${pageNumber} page`);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <Text>Photos</Text>
        <Search onSearch={onSearchPage} />
        <Photo />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
