import React, {useContext} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import CommonButton from '../components/commonButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen() {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Welcome {user.uid}</Text>
      <CommonButton
        title="Log Out"
        black
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to logout?', [
            {
              text: 'Yes',
              onPress: () => logout(),
            },
            {text: 'No'},
          ])
        }
      />
    </SafeAreaView>
  );
}
