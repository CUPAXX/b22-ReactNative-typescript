/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {authForgotUpdate} from '../redux/actions/auth.actions';
import {showMessage} from 'react-native-flash-message';
const bgForgotUpdate = require('../assets/bgForgotUpdate.png');

export interface ForgotUpdateProps {
  navigation: any;
  auth: any;
  authForgotUpdate: any;
}

class ForgotUpdateComponent extends React.Component<ForgotUpdateProps, any> {
  constructor(props: ForgotUpdateProps) {
    super(props);
  }

  onSub = (values: {email: string; password: string; code: string}) => {
    const {password, email, code} = values;
    this.props.authForgotUpdate(password, email, code).then(() => {
      if (this.props.auth.errMsg === '') {
        showMessage({
          message: 'Update password success',
          type: 'default',
          backgroundColor: '#01937C',
          color: 'white',
        });
        return this.props.navigation.navigate('Login');
      } else {
        showMessage({
          message: `${this.props.auth.errMsg}`,
          type: 'default',
          backgroundColor: '#D54C4C',
          color: 'white',
        });
      }
    });
  };

  public render() {
    return (
      <ScrollView style={styles.parent}>
        <View style={styles.parentTop}>
          <Image source={bgForgotUpdate} style={styles.bg} />
        </View>
        <View style={{width: '100%'}}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              code: '',
            }}
            onSubmit={values => this.onSub(values)}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Your email is not valid')
                .required('Please Provide Your Email'),
              code: yup
                .string()
                .required('Please Provide Your Verification Code'),
              password: yup
                .string()
                .matches(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                  'Password at least have 1 uppercase, 1 lowercase, 1 number and 8 character long',
                )
                .required('Please Provide Your Password'),
            })}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <View style={styles.parentInput}>
                <Text style={styles.welcomeText}>Update Password</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#37474f"
                  placeholder="Verification Code"
                  value={values.code}
                  onChangeText={handleChange('code')}
                  onBlur={() => setFieldTouched('code')}
                />
                {touched.code && errors.code && (
                  <Text style={styles.errMsg}>{errors.code}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#37474f"
                  placeholder="Email Address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errMsg}>{errors.email}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#37474f"
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errMsg}>{errors.password}</Text>
                )}

                <View style={styles.parentBtn}>
                  <TouchableOpacity
                    style={styles.btnSubmit}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.textSubmit}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: {auth: any}) => ({
  auth: state.auth,
});

const mapDispatchToProps = {authForgotUpdate};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotUpdateComponent);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    color: '#37474f',
  },
  bg: {
    width: 300,
    height: 300,
  },
  parentBtn: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  btnSubmit: {
    backgroundColor: '#e8505b',
    paddingHorizontal: 140,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textSubmit: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  parentTop: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  parentInput: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 22,
    marginTop: -30,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  errMsg: {
    color: '#e8505b',
    paddingTop: 10,
  },
  signIn: {
    color: '#37474f',
  },
  parentBot: {
    flexDirection: 'row',
    paddingTop: 15,
  },
});
