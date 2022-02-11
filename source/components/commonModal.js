import React from 'react';
import {SafeAreaView} from 'react-native';
import AppModal from './AppModal';
import CommonButton from './commonButton';

export default function CommonModal({
  modalVisible,
  setModalVisible,
  title,
  subTitle,
}) {
  return (
    <SafeAreaView>
      <CommonButton
        title="Logout"
        black
        onPress={() => setModalVisible(true)}
      />
      <AppModal
        title="Logout"
        subTitle="Are you sure you want to logout?"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}
