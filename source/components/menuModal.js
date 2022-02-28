import React from 'react';
import {SafeAreaView} from 'react-native';
import AppMenuModal from './AppMenuModal';

export default function MenuModal({menuModalVisible, setMenuModalVisible}) {
  return (
    <SafeAreaView>
      <AppMenuModal
        menuModalVisible={menuModalVisible}
        setMenuModalVisible={setMenuModalVisible}
      />
    </SafeAreaView>
  );
}
