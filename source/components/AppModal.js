import React, {useContext} from 'react';
import {Text, Modal, TouchableOpacity, View} from 'react-native';
import COLORS from '../utilities/colors';
import CommonButton from './commonButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function AppModal({
  modalVisible,
  setModalVisible,
  title,
  subTitle,
}) {
  const {logout} = useContext(AuthContext);

  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onPress={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            height: 160,
            marginHorizontal: 20,
            borderRadius: 15,
            borderColor: COLORS.white,
            borderWidth: 1,
          }}>
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
              }}>
              {title}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                marginTop: 10,
                fontSize: 16,
              }}>
              {subTitle}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CommonButton
              white
              title="Yes"
              style={{flex: 1, marginHorizontal: 10}}
              onPress={() => logout()}
            />
            <CommonButton
              white
              title="No"
              style={{flex: 1, marginHorizontal: 10}}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
