import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CommonButton from '../components/commonButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen() {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Welcome {user.uid}</Text>
      <CommonButton title="Log Out" black onPress={() => logout()} />
    </SafeAreaView>
  );
}
