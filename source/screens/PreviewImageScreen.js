import React from 'react';
import {View, Image} from 'react-native';
import COLORS from '../utilities/colors';

export default function PreviewImageScreen({route}) {
  const {uri} = route.params;

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 1,
        }}
      />
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        <Image source={{uri: uri}} style={{width: '100%', height: '100%'}} />
      </View>
    </>
  );
}
