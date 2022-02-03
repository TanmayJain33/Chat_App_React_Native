import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import {GlobalContext} from '../context/Provider';
import COLORS from '../utilities/colors';

const {height, width} = Dimensions.get('window');

export default function commonLoader() {
  const globalState = useContext(GlobalContext);
  const {loaderState} = globalState;
  const {loading} = loaderState;

  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color={COLORS.white}
        />
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  loaderContainer: {
    backgroundColor: COLORS.black,
    opacity: 0.5,
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: COLORS.black,
    height: 44,
    width: 44,
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
