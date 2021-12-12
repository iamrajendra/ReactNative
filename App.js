import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import { HomeScreen} from './screen/Home.js';
import { ProfileScreen} from './screen/Profile.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>

          </NavigationContainer>
  );
}

export default App;

