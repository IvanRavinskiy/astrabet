import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';
import {userCardStyles} from './styles';

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

export const UserCard = () => {
  const [show, setShow] = useState(false);

  const showAll = () => {
    setShow(!show);
  };

  return (
    <TouchableWithoutFeedback onPress={showAll}>
      <View style={userCardStyles.root}>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Name:</Text>
          <Text style={userCardStyles.title}>{user.name}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Username:</Text>
          <Text style={userCardStyles.title}>{user.username}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Email:</Text>
          <Text style={userCardStyles.title}>{user.email}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Phone:</Text>
          <Text style={userCardStyles.title}>{user.phone}</Text>
        </View>
        {show && (
          <>
            <View style={userCardStyles.container}>
              <Text style={userCardStyles.label}>Address:</Text>
              <Text style={userCardStyles.title}>
                {user.address.city}, {user.address.street} str.,{' '}
                {user.address.suite}
              </Text>
            </View>
            <View style={userCardStyles.container}>
              <Text style={userCardStyles.label}>Company:</Text>
              <Text style={userCardStyles.title}>{user.company.name}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
