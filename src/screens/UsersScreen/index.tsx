import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {UserCard} from './components/UserCard';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_USER, selectUsers, User} from '../../state/reducers/user';

export const UsersScreen = () => {
  const users = useAppSelector(selectUsers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_USER());
  }, []);

  const renderItem = ({item}: {item: User}) => {
    return <UserCard {...item} />;
  };

  const keyExtractor = (item: User) => String(item.id);

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
