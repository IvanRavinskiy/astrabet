import React from 'react';
import {Image, View} from 'react-native';
import {FC} from 'react';
import {photoStyles} from './styles';

const photo = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
};
export const Photo: FC = () => {
  return (
    <View style={photoStyles.root}>
      <Image source={{uri: photo.url}} style={photoStyles.photo} />
    </View>
  );
};
