import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonContainer from '../components/commonContainer';
import COLORS from '../utilities/colors';

export default function HomeScreen() {
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
        </SafeAreaView>
      </CommonContainer>
    </>
  );
}
