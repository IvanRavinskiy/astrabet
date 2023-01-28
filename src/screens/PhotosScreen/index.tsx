import React, {useCallback, useEffect, useMemo} from 'react';
import {Alert, FlatList, Text} from 'react-native';
import {PhotoCard, PreparePhoto} from './components/Photo';
import {Search} from './components/Search';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_PHOTO, selectPhotos} from '../../state/reducers/photo';
import {SafeAreaView} from 'react-native-safe-area-context';

export const PhotosScreen = () => {
  const photos = useAppSelector(selectPhotos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_PHOTO(1));
  }, []);

  const preparePhotos = useMemo(
    () =>
      photos.map(photo => ({
        id: photo.id,
        url: photo.thumbnailUrl,
      })),
    [photos],
  );

  const renderItem = useCallback(({item}: {item: PreparePhoto}) => {
    return <PhotoCard {...item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: PreparePhoto) => String(item?.id),
    [],
  );

  const emptyComponent = useCallback(() => <Text>Empty list...</Text>, []);

  const onSearchPage = useCallback(
    (pageNumber: number) => {
      if (pageNumber > 100) {
        Alert.alert('Attention', 'Max count is 100');
        return;
      }
      dispatch(GET_PHOTO(pageNumber));
    },
    [dispatch],
  );

  return (
    <SafeAreaView>
      <Search onSearch={onSearchPage} />
      <FlatList
        data={preparePhotos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={emptyComponent}
        windowSize={3}
        getItemLayout={(data, index) => ({
          length: 300,
          offset: 300 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};
