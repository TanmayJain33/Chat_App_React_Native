import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonContainer from '../components/commonContainer';
import COLORS from '../utilities/colors';
import CommonButton from '../components/commonButton';
import {PERMISSIONS} from '../utilities/routeNames';

export default function HomeScreen({navigation}) {
  const PressHandler = () => {
    navigation.navigate(PERMISSIONS);
  };

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 1,
        }}
      />
      <CommonContainer>
        <SafeAreaView>
          <Text style={{color: COLORS.white}}>Welcome Tanmay</Text>
          <CommonButton title="Permissions Demo" white onPress={PressHandler} />
        </SafeAreaView>
      </CommonContainer>
    </>
  );
}
