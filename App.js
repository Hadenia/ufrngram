import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ChatListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>              
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{title: 'Chat List'}}/>             
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title: 'Chat'}}/>         
      </Stack.Navigator>
    </NavigationContainer>

  );
}