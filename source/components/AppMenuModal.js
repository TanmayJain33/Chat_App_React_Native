import React, {useState} from 'react';
import {Text, Modal, TouchableOpacity, View} from 'react-native';
import COLORS from '../utilities/colors';
import CommonModal from '../components/commonModal';

export default function AppMenuModal({menuModalVisible, setMenuModalVisible}) {
  const [modalVisible, setModalVisible] = useState(false);

  function modalVisibility() {
    setMenuModalVisible(false);
    setModalVisible(true);
  }

  return (
    <>
      <Modal visible={menuModalVisible} transparent>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onPress={() => setMenuModalVisible(false)}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '50%',
              height: '30%',
              position: 'absolute',
              right: 0,
              top: 60,
              borderRadius: 15,
              paddingTop: 10,
            }}>
            <TouchableOpacity style={{marginHorizontal: 20, marginVertical: 5}}>
              <Text style={{color: COLORS.black, fontSize: 18}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 20, marginVertical: 5}}
              onPress={() => modalVisibility()}>
              <Text style={{color: COLORS.black, fontSize: 18}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <CommonModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Logout"
        subTitle="Are you sure you want to logout?"
      />
    </>
  );
}
