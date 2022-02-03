import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
