import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Iss" component={IssLocationScreen}/>
        <Stack.Screen name = "Meteor" component={MeteorScreen}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;
