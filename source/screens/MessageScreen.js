import React from 'react';
import {View} from 'react-native';
import COLORS from '../utilities/colors';
import CommonButton from '../components/commonButton';
import SendSMS from 'react-native-sms';
import SmsAndroid from 'react-native-get-sms-android';

export default function MessageScreen() {
  const sendSMS = () => {
    console.log('Send SMS');
    SendSMS.send(
      {
        body: 'Hello Tanmay, you have done well!',
        recipients: ['0123456789', '9876543210'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: false,
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS sent');
        } else if (cancelled) {
          console.log('SMS cancelled');
        } else if (error) {
          console.log('Error occured');
        }
      },
    );
  };

  const getSMS = () => {
    var filter = {
      box: 'inbox',
      read: 0,
      _id: 1234,
      address: '+917838834717',
      body: 'How are you',
      indexFrom: 0,
      maxCount: 10,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        console.log('Count: ', count);
        console.log('List: ', smsList);
        var arr = JSON.parse(smsList);
        arr.forEach(function (object) {
          console.log('Object: ' + object);
          console.log('-->' + object.date);
          console.log('-->' + object.body);
          alert('Your message with selected id is: ' + object.body);
        });
      },
    );
  };

  const deleteSMS = () => {
    console.log('Delete SMS');
    SmsAndroid.delete(
      1234,
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      success => {
        console.log('SMS deleted successfully');
      },
    );
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CommonButton
        title="SEND MESSAGE"
        white
        style={{width: '60%'}}
        onPress={sendSMS}
      />
      <CommonButton
        title="READ MESSAGE"
        white
        style={{width: '60%'}}
        onPress={getSMS}
      />
      <CommonButton
        title="DELETE MESSAGE"
        white
        style={{width: '60%'}}
        onPress={deleteSMS}
      />
    </View>
  );
}
