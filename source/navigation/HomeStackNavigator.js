import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {HOME} from '../utilities/routeNames';
import COLORS from '../utilities/colors';
import Header from '../components/header';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'rgba(0,0,0, 0.8)',
        },
      }}>
      <HomeStack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </HomeStack.Navigator>
  );
}
