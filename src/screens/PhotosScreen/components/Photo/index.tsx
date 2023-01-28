import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {FC} from 'react';
import {photoStyles} from './styles';

export type PreparePhoto = {
  id: number;
  url: string;
};
export const PhotoCard: FC<PreparePhoto> = memo(
  props => {
    const {url} = props;
    return (
      <View style={photoStyles.root}>
        <Image source={{uri: url}} style={photoStyles.photo} />
      </View>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
  },
);
