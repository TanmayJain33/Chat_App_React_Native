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
      <AppModal
        title={title}
        subTitle={subTitle}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}
