import React from 'react';
import {FC, memo, useState} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import {searchStyles} from './styles';

type Props = {
  onSearch: (page: number) => void;
};

export const Search: FC<Props> = memo(({onSearch}) => {
  const [page, setPage] = useState<string>('1');

  const onEndEditing = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    onSearch(+e.nativeEvent.text.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={searchStyles.root}>
      <Text style={searchStyles.label}>Change id:</Text>
      <TextInput
        keyboardType={'number-pad'}
        onEndEditing={onEndEditing}
        onChangeText={setPage}
        value={page}
        style={searchStyles.title}
      />
    </View>
  );
});
