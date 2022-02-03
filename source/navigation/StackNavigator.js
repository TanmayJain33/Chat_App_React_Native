import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import {LOGIN, SIGNUP, HOME} from '../utilities/routeNames';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
