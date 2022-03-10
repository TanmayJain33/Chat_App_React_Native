import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';
import RNLocation from 'react-native-location';
import {RENDERMAP} from '../utilities/routeNames';

RNLocation.configure({
  distanceFilter: 1.0,
});

export default function GeolocationScreen({navigation}) {
  const [viewLocation, setViewLocation] = useState({});

  const getLocation = async () => {
    let permission = await RNLocation.checkPermission({
      android: {
        detail: 'coarse',
      },
    });

    console.log(permission);

    let location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      setViewLocation(location);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      setViewLocation(location);
    }
  };

  return (
    <View
      style={{
        paddingTop: 10,
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CommonButton
        title="Get Location"
        white
        style={{width: '60%', marginBottom: 10}}
        onPress={getLocation}
      />
      <Text style={{color: COLORS.white, fontSize: 16}}>
        Latitude: {viewLocation.latitude}
      </Text>
      <Text style={{color: COLORS.white, fontSize: 16}}>
        Longitude: {viewLocation.longitude}
      </Text>
      <CommonButton
        title="Send Location"
        white
        style={{width: '60%', marginTop: 10}}
        onPress={() => {
          navigation.navigate(RENDERMAP, {
            latitude: viewLocation.latitude,
            longitude: viewLocation.longitude,
          });
        }}
      />
    </View>
  );
}
