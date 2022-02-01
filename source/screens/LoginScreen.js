import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CommonContainer from '../components/commonContainer';
import CommonTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';

export default function LoginScreen({navigation}) {
  return (
    <CommonContainer>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Chattingaza</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      <View style={styles.form}>
        <CommonTextInput
          label="Email"
          placeholder="Enter Email"
          placeholderTextColor={COLORS.white}
        />
        <CommonTextInput
          label="Password"
          placeholder="Enter Password"
          placeholderTextColor={COLORS.white}
          secureTextEntry={true}
          icon={<Text style={{color: COLORS.white}}>SHOW</Text>}
          iconPosition="right"
        />
        <CommonButton title="Submit" white />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.linkBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CommonContainer>
  );
}

const styles = StyleSheet.create({
  logoImage: {width: 250, height: 250, alignSelf: 'center'},
  title: {
    color: COLORS.white,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
    fontSize: 21,
  },
  subTitle: {
    color: COLORS.grey,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
    fontSize: 17,
  },
  form: {paddingTop: 20},
  createSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 15,
    color: COLORS.lightGreen,
    marginTop: 10,
  },
  linkBtn: {
    fontSize: 15,
    color: COLORS.lightGreen,
    marginTop: 10,
  },
});
