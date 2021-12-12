import React from 'react';
import { Button, Text } from 'react-native';


const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.data.state} have total seats {route.params.data.seats} </Text>;
};
export {ProfileScreen};
