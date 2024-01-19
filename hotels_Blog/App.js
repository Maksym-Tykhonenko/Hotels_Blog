
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import HotelsScreen from './screens/HotelsScreen';
import QuizScreen from './screens/QuizScreen';
import AboutAppScreen from './screens/AboutAppScreen';


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen name='HotelsScreen' component={HotelsScreen} />
        <Stack.Screen name='QuizScreen' component={QuizScreen} />
        <Stack.Screen name='AboutAppScreen' component={AboutAppScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
  
};



export default App;
