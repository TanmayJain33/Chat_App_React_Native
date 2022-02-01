import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import COLORS from '../utilities/colors';

export default function CommonContainer({style, children}) {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
      <ScrollView>
        <View style={[styles.wrapper, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
