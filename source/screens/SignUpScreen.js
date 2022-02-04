import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CommonContainer from '../components/commonContainer';
import CommonTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignUpScreen({navigation}) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {name, email, password, confirmPassword} = credentials;
  const [errors, setErrors] = useState({});
  const {signup} = useContext(AuthContext);

  function onChange({name, value}) {
    if (value != '') {
      if (name == 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Password must be more than 5 characters long.',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required.'};
      });
    }
    setCredentials({...credentials, [name]: value});
  }

  function onSubmit(email, password) {
    if (!credentials.name) {
      setErrors(prev => {
        return {...prev, name: 'Please enter your name.'};
      });
    }
    if (!credentials.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email.'};
      });
    }
    if (!credentials.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a passsword.'};
      });
    }
    if (credentials.password != credentials.confirmPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: 'Password does not match.'};
      });
    }
    if (
      Object.values(credentials).every(item => item.trim().length > 0) &&
      Object.values(credentials).length == 4 &&
      Object.values(errors).every(item => !item)
    ) {
      signup(email, password);
    }
  }

  return (
    <CommonContainer>
      <View>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <CommonTextInput
            label="Name"
            placeholder="Enter Name"
            placeholderTextColor={COLORS.white}
            icon={
              <Image
                source={require('../../assets/user.png')}
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
              onChange({name: 'name', value: value});
            }}
            error={errors.name}
            value={name}
          />
          <CommonTextInput
            label="Email"
            placeholder="Enter Email"
            placeholderTextColor={COLORS.white}
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
            value={email}
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
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password}
            value={password}
          />
          <CommonTextInput
            label="Confirm Password"
            placeholder="Confirm Password"
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
            onChangeText={value => {
              onChange({name: 'confirmPassword', value: value});
            }}
            error={errors.confirmPassword}
            value={confirmPassword}
          />
          <CommonButton
            title="Submit"
            white
            onPress={() => onSubmit(credentials.email, credentials.password)}
          />
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
