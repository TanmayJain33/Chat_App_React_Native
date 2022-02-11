import React, {useContext, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CommonModal from '../components/commonModal';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen() {
  const {user} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Text>Welcome {user.uid}</Text>
      <CommonModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}
