import React from 'react';
import { Button, Text } from 'react-native';
import {styles} from '../style/style.js'


const ProfileScreen = ({ navigation, route }) => {
  return <Text
              style = {styles.item}

  >{route.params.data.state} have total seats {route.params.data.seats} </Text>;
};
export {ProfileScreen};
