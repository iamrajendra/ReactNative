import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen} from './screen/Home.js';
import { ProfileScreen} from './screen/Profile.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator>

        <Stack.Screen
          name="parliament of india"
          component={HomeScreen}
          options={{ title: 'Parliament of india' }}
        />
        <Stack.Screen name="State details" component={ProfileScreen} />
      </Stack.Navigator>

          </NavigationContainer>
  );
}

export default App;


