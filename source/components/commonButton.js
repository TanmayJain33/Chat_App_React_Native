import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../utilities/colors';

export default function CommonButton({
  title,
  loading,
  disabled,
  black,
  white,
  style,
  onPress,
}) {
  function getBackgroundColor() {
    if (disabled) {
      return COLORS.grey;
    }
    if (white) {
      return COLORS.white;
    }
    if (black) {
      return COLORS.black;
    }
  }

  function getBorderColor() {
    if (white) {
      return COLORS.black;
    }
    if (black) {
      return COLORS.white;
    }
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.wrapper,
        {backgroundColor: getBackgroundColor(), borderColor: getBorderColor()},
        style,
      ]}>
      <View style={{flexDirection: 'row'}}>
        {loading && (
          <ActivityIndicator
            color={
              disabled ? COLORS.white : white ? COLORS.black : COLORS.white
            }
          />
        )}
        {title && (
          <Text
            style={{
              color: white ? COLORS.black : COLORS.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
