import React from 'react';
import {SafeAreaView, View, Linking} from 'react-native';
import CommonContainer from '../components/commonContainer';
import COLORS from '../utilities/colors';
import CommonButton from '../components/commonButton';
import {CAMERA, CALL, CONTACT} from '../utilities/routeNames';
import {
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  checkMultiple,
} from 'react-native-permissions';

export default function PermissionsScreen({navigation}) {
  const PressHandler = () => {
    navigation.navigate(CAMERA);
  };

  const CallPressHandler = () => {
    navigation.navigate(CALL);
  };

  const requestPermission = () => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CALENDAR,
      PERMISSIONS.ANDROID.WRITE_CALENDAR,
    ]).then(response => {
      console.log(response);
    });
  };

  const CalendarPressHandler = () => {
    requestPermission();
    checkMultiple([
      PERMISSIONS.ANDROID.READ_CALENDAR,
      PERMISSIONS.ANDROID.WRITE_CALENDAR,
    ]).then(result => {
      if (
        result[PERMISSIONS.ANDROID.READ_CALENDAR] === RESULTS.GRANTED &&
        result[PERMISSIONS.ANDROID.WRITE_CALENDAR] === RESULTS.GRANTED
      ) {
        Linking.openURL('content://com.android.calendar/time/');
      }
    });
  };

  const ContactsPressHandler = () => {
    navigation.navigate(CONTACT);
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
          <CommonButton title="Open Camera" white onPress={PressHandler} />
          <CommonButton title="Call" white onPress={CallPressHandler} />
          <CommonButton title="Calendar" white onPress={CalendarPressHandler} />
          <CommonButton title="Contacts" white onPress={ContactsPressHandler} />
        </SafeAreaView>
      </CommonContainer>
    </>
  );
}
