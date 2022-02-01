import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CommonContainer from '../components/commonContainer';
import CommonTextInput from '../components/commonTextInput';
import CommonButton from '../components/commonButton';
import COLORS from '../utilities/colors';

export default function SignUpScreen({navigation}) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
    setForm({...form, [name]: value});
  }

  function onSubmit() {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please enter a username.'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter your first name.'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter your last name.'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email.'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a passsword.'};
      });
    }
  }

  return (
    <CommonContainer>
      <View>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <CommonTextInput
            label="Username"
            placeholder="Enter Username"
            placeholderTextColor={COLORS.white}
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
            error={errors.userName}
          />
          <CommonTextInput
            label="First Name"
            placeholder="Enter First Name"
            placeholderTextColor={COLORS.white}
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName}
          />
          <CommonTextInput
            label="Last Name"
            placeholder="Enter Last Name"
            placeholderTextColor={COLORS.white}
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={errors.lastName}
          />
          <CommonTextInput
            label="Email"
            placeholder="Enter Email"
            placeholderTextColor={COLORS.white}
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
            icon={<Text style={{color: COLORS.white}}>SHOW</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password}
          />
          <CommonButton title="Submit" white onPress={onSubmit} />
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
