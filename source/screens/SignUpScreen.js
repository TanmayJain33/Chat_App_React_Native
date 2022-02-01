import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CommonContainer from '../components/commonContainer';
import CommonTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';

export default function SignUpScreen({navigation}) {
  return (
    <CommonContainer>
      <View>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <CommonTextInput
            label="Username"
            placeholder="Enter Username"
            placeholderTextColor={COLORS.white}
          />
          <CommonTextInput
            label="First Name"
            placeholder="Enter First Name"
            placeholderTextColor={COLORS.white}
          />
          <CommonTextInput
            label="Last Name"
            placeholder="Enter Last Name"
            placeholderTextColor={COLORS.white}
          />
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
            <Text style={styles.infoText}>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
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
