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
import {showMessage} from 'react-native-flash-message';
const bgLogin = require('../assets/bgLogin.png');

export interface LoginProps {
  navigation: any;
}

export default class LoginComponent extends React.Component<LoginProps, any> {
  constructor(props: LoginProps) {
    super(props);
  }

  public render() {
    return (
      <ScrollView style={styles.parent}>
        <View style={styles.parentTop}>
          <Image source={bgLogin} style={styles.bg} />
        </View>
        <View style={{width: '100%'}}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => console.log(values)}
            validationSchema={yup.object().shape({
              email: yup.string().email('Your email is not valid').required(),
              password: yup
                .string()
                .matches(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                  'Password at least have 1 uppercase, 1 lowercase, 1 number and 8 character long',
                )
                .required(),
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
                <Text style={styles.welcomeText}>Login</Text>
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
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Forgot')}>
                  <Text style={styles.forgot}>Forgot password ?</Text>
                </TouchableOpacity>
                <View style={styles.parentBtn}>
                  <TouchableOpacity
                    style={styles.btnSignIn}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.textSignIn}>Sign in</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.parentBot}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.signUp}>I Dont Have a Account. </Text>
                  <Text style={{fontWeight: 'bold', color: '#e8505b'}}>
                    Sign Up
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
  btnSignIn: {
    backgroundColor: '#e8505b',
    paddingHorizontal: 140,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textSignIn: {
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
    marginTop: -20,
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
    paddingTop: 15,
  },
});
