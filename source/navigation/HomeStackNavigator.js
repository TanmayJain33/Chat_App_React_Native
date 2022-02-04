import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {HOME} from '../utilities/routeNames';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen name={HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
