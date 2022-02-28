import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import COLORS from '../utilities/colors';
import MenuModal from '../components/menuModal';

export default function Header() {
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  return (
    <View
      style={{
        width: '125%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{position: 'absolute', right: -210}}
        onPress={() => setMenuModalVisible(true)}>
        <Image
          source={require('../../assets/dots.png')}
          style={{
            tintColor: COLORS.white,
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Chattingaza
        </Text>
      </View>
      <MenuModal
        menuModalVisible={menuModalVisible}
        setMenuModalVisible={setMenuModalVisible}
      />
    </View>
  );
}
