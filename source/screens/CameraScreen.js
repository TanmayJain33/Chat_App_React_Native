import React from 'react';
import {View, Image} from 'react-native';
import COLORS from '../utilities/colors';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CommonButton from '../components/commonButton';
import {PREVIEW_IMAGE} from '../utilities/routeNames';

export default function CameraScreen({navigation}) {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const CaptureHandler = async () => {
    try {
      const data = await takePicture();
      navigation.navigate(PREVIEW_IMAGE, {uri: data.uri});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 1,
        }}
      />
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <CommonButton title="Capture" black onPress={CaptureHandler} />
      </RNCamera>
    </>
  );
}
