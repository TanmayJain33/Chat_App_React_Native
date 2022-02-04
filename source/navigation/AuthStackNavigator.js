import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {LOGIN, SIGNUP} from '../utilities/routeNames';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={SIGNUP} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
