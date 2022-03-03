import React, {useState} from 'react';
import {View, Text} from 'react-native';
import call from 'react-native-phone-call';
import COLORS from '../utilities/colors';
import CommomTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export default function CallScreen() {
  const [inputValue, setInputValue] = useState('');

  const requestPermission = () => {
    request(PERMISSIONS.ANDROID.CALL_PHONE).then(response => {
      console.log(response);
    });
  };

  const triggerCall = () => {
    if (inputValue.length != 10) {
      alert('Please insert correct contact number.');
      return;
    }
    const args = {
      number: inputValue,
      prompt: true,
    };
    requestPermission();
    check(PERMISSIONS.ANDROID.CALL_PHONE).then(result => {
      switch (result) {
        case RESULTS.GRANTED:
          call(args).catch(console.error);
          break;
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        padding: 10,
      }}>
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          fontWeight: '700',
          color: COLORS.white,
        }}>
        Example to Make a Phone Call in React Native App
      </Text>
      <CommomTextInput
        onChangeText={inputValue => setInputValue(inputValue)}
        placeholder="Enter contact Number to Call"
        placeholderTextColor={COLORS.white}
        keyboardType="numeric"
      />
      <CommonButton title="Make a Call" white onPress={triggerCall} />
    </View>
  );
}
