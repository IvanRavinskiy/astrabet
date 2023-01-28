import React, {FC} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';
import {userCardStyles} from './styles';
import {User} from '../../../../state/reducers/user';

export const UserCard: FC<User> = props => {
  const {name, company, address, username, phone, email} = props;
  const [show, setShow] = useState(false);

  const showAll = () => {
    setShow(!show);
  };

  return (
    <TouchableWithoutFeedback onPress={showAll}>
      <View style={userCardStyles.root}>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Name:</Text>
          <Text style={userCardStyles.title}>{name}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Username:</Text>
          <Text style={userCardStyles.title}>{username}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Email:</Text>
          <Text style={userCardStyles.title}>{email}</Text>
        </View>
        <View style={userCardStyles.container}>
          <Text style={userCardStyles.label}>Phone:</Text>
          <Text style={userCardStyles.title}>{phone}</Text>
        </View>
        {show && (
          <>
            <View style={userCardStyles.container}>
              <Text style={userCardStyles.label}>Address:</Text>
              <Text style={userCardStyles.title}>
                {address.city}, {address.street} str., {address.suite}
              </Text>
            </View>
            <View style={userCardStyles.container}>
              <Text style={userCardStyles.label}>Company:</Text>
              <Text style={userCardStyles.title}>{company.name}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
