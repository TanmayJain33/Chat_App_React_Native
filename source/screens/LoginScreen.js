import React, {useState, useContext} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CommonContainer from '../components/commonContainer';
import CommonTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';
import {GlobalContext} from '../context/Provider';
import {LOADING_START, LOADING_STOP} from '../context/actionTypes';
import {AuthContext} from '../navigation/AuthProvider';

export default function LoginScreen({navigation}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;
  const [errors, setErrors] = useState({});

  const globalState = useContext(GlobalContext);
  const {loaderDispatch} = globalState;

  const {login} = useContext(AuthContext);

  function onChange({name, value}) {
    if (value != '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required.'};
      });
    }
    setCredentials({...credentials, [name]: value});
  }

  function onSubmit(email, password) {
    if (!credentials.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email.'};
      });
    } else if (!credentials.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a passsword.'};
      });
    } else {
      loaderDispatch({
        type: LOADING_START,
      });
      setTimeout(() => {
        loaderDispatch({
          type: LOADING_STOP,
        });
      }, 2000);
    }
    if (
      Object.values(credentials).every(item => item.trim().length > 0) &&
      Object.values(credentials).length == 2 &&
      Object.values(errors).every(item => !item)
    ) {
      login(email, password);
    }
  }

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
          value={email}
          icon={
            <Image
              source={require('../../assets/email.png')}
              style={{
                tintColor: COLORS.white,
                width: 15,
                height: 15,
                marginRight: 12,
                marginLeft: 3,
              }}
            />
          }
          iconPosition="left"
          onChangeText={value => {
            onChange({name: 'email', value: value});
          }}
          error={errors.email}
        />
        <CommonTextInput
          label="Password"
          placeholder="Enter Password"
          placeholderTextColor={COLORS.white}
          secureTextEntry={true}
          icon={
            <Image
              source={require('../../assets/padlock.png')}
              style={{
                tintColor: COLORS.white,
                width: 20,
                height: 20,
                marginRight: 10,
              }}
            />
          }
          iconPosition="left"
          value={password}
          onChangeText={value => {
            onChange({name: 'password', value: value});
          }}
          error={errors.password}
        />
        <CommonButton
          title="Submit"
          white
          onPress={() => onSubmit(credentials.email, credentials.password)}
        />
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
