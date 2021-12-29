import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedTabNaviator from './navigators/LoggedTabNavigator';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>     
        <Stack.Screen name="LoggedTabNaviator" component={LoggedTabNaviator} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}