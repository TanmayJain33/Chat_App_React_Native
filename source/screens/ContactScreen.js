import React from 'react';
import {View, Text, FlatList} from 'react-native';
import COLORS from '../utilities/colors';

export default function ContactScreen({route}) {
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 5,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.white,
        }}>
        <View>
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 100,
              overflow: 'hidden',
              backgroundColor: COLORS.grey,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              {item?.givenName[0]}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
          <Text style={{color: COLORS.white, fontSize: 18}}>
            {item?.givenName} {item?.middleName && item.middleName + ' '}{' '}
            {item?.familiyName}
          </Text>
          <Text style={{color: COLORS.white, fontSize: 18}}>
            {item?.phoneNumbers[0]?.number}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.black, flex: 1}}>
      <FlatList
        data={route.params}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
