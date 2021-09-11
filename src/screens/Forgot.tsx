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
import {authForgot} from '../redux/actions/auth.actions';
import {showMessage} from 'react-native-flash-message';
const bgForgot = require('../assets/bgForgot.png');

export interface ForgotProps {
  navigation: any;
  auth: any;
  authForgot: any;
}

class ForgotComponent extends React.Component<ForgotProps, any> {
  constructor(props: ForgotProps) {
    super(props);
  }

  onSub = (values: {email: string}) => {
    const {email} = values;
    this.props.authForgot(email).then(() => {
      if (this.props.auth.errMsg === '') {
        showMessage({
          message: 'Verification Code Send Success',
          type: 'default',
          backgroundColor: '#01937C',
          color: 'white',
        });
        return this.props.navigation.navigate('ForgotUpdate');
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
          <Image source={bgForgot} style={styles.bg} />
        </View>
        <View style={{width: '100%'}}>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={values => this.onSub(values)}
            validationSchema={yup.object().shape({
              email: yup.string().email('Your email is not valid').required(),
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
                <Text style={styles.welcomeText}>Forgot Password</Text>
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
                <View style={styles.parentBtn}>
                  <TouchableOpacity
                    style={styles.btnSend}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.textSend}>Send Code</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.parentBot}>
                  <Text style={styles.signUp}>Check Your Email For </Text>
                  <Text style={{fontWeight: 'bold', color: '#e8505b'}}>
                    Verification Code
                  </Text>
                </TouchableOpacity>
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

const mapDispatchToProps = {authForgot};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotComponent);

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
    width: 330,
    height: 330,
  },
  parentBtn: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  btnSend: {
    backgroundColor: '#e8505b',
    paddingHorizontal: 120,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textSend: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  parentTop: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  parentInput: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 30,
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
  forgot: {
    paddingTop: 7,
    color: '#37474f',
  },
  signUp: {
    color: '#37474f',
  },
  parentBot: {
    flexDirection: 'row',
    paddingTop: 30,
  },
});
