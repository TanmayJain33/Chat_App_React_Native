import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Sign Up')}>Login Screen</Text>
    </SafeAreaView>
  );
}
