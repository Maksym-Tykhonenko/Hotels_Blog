
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
import SelectCountryScreen from './screens/SelectCountryScreen';
import QuizScreen from './screens/QuizScreen';
import AboutAppScreen from './screens/AboutAppScreen';
import SelectHotelsScreen from './screens/SelectHotelsScreen';
import HotelScreen from './screens/Hotel';
import NewSelectHotelsScreen from './screens/NewSelectHotelsScreen';



const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen name='SelectCountryScreen' component={SelectCountryScreen} />
        <Stack.Screen name='QuizScreen' component={QuizScreen} />
        <Stack.Screen name='AboutAppScreen' component={AboutAppScreen} />
        <Stack.Screen name='SelectHotelsScreen' component={SelectHotelsScreen} />
        <Stack.Screen name='HotelScreen' component={HotelScreen} />
        <Stack.Screen name='NewSelectHotelsScreen' component={NewSelectHotelsScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
  
};



export default App;
