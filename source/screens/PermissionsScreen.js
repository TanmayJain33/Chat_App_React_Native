import React from 'react';
import {SafeAreaView, View, Linking, PermissionsAndroid} from 'react-native';
import CommonContainer from '../components/commonContainer';
import COLORS from '../utilities/colors';
import CommonButton from '../components/commonButton';
import {
  CAMERA,
  CALL,
  CONTACT,
  AUDIO,
  MESSAGE,
  GEOLOCATION,
} from '../utilities/routeNames';
import {
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  checkMultiple,
} from 'react-native-permissions';
import Contacts from 'react-native-contacts';

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

  const requestPermissions = () => {
    requestMultiple([
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
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
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contacts => {
          console.log(contacts);
          navigation.navigate(CONTACT, contacts);
        })
        .catch(e => {
          console.log(e);
        }),
    );
  };

  const AudioPressHandler = () => {
    requestPermissions();
    checkMultiple([
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(result => {
      if (
        result[PERMISSIONS.ANDROID.RECORD_AUDIO] === RESULTS.GRANTED &&
        result[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] === RESULTS.GRANTED &&
        result[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.GRANTED
      ) {
        navigation.navigate(AUDIO);
      }
    });
  };

  const MessagePressHandler = () => {
    navigation.navigate(MESSAGE);
  };

  const GeoLocationPressHandler = () => {
    navigation.navigate(GEOLOCATION);
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
          <CommonButton
            title="Audio Recoder"
            white
            onPress={AudioPressHandler}
          />
          <CommonButton title="Message" white onPress={MessagePressHandler} />
          <CommonButton
            title="Geolocation with GPS implement maps"
            white
            onPress={GeoLocationPressHandler}
          />
        </SafeAreaView>
      </CommonContainer>
    </>
  );
}
