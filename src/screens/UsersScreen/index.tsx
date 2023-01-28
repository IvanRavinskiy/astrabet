import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import {UserCard} from './components/UserCard';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_USER, selectUsers, User} from '../../state/reducers/user';
import {SafeAreaView} from 'react-native-safe-area-context';

export const UsersScreen = () => {
  const users = useAppSelector(selectUsers);
  const memoUsers = useMemo(() => users, [users]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_USER());
  }, []);

  const renderItem = useCallback(({item}: {item: User}) => {
    return <UserCard {...item} />;
  }, []);

  const keyExtractor = useCallback((item: User) => String(item.id), []);

  return (
    <SafeAreaView>
      <FlatList
        data={memoUsers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
