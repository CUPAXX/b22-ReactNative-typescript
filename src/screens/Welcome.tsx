import * as React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const bgWelcome = require('../assets/bgWelcome.png');

export interface HomeProps {
  navigation: any;
}

export default class Home extends React.Component<HomeProps, any> {
  props: any;
  constructor(props: HomeProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parentTop}>
          <Image source={bgWelcome} style={styles.bg} />
          <Text style={styles.welcomeText}>
            Simple Auth Apps Build With Typescript
          </Text>
        </View>
        <View style={styles.parentBtn}>
          <TouchableOpacity
            style={styles.btnSignUp}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.textSignUp}>Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSignIn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 30,
    textAlign: 'center',
    color: '#37474f',
  },
  bg: {
    width: 350,
    height: 350,
  },
  parentBtn: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 40,
  },
  btnSignUp: {
    backgroundColor: '#e8505b',
    paddingHorizontal: 140,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  textSignUp: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  parentTop: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnSignIn: {
    borderColor: '#e8505b',
    borderWidth: 2,
    paddingHorizontal: 140,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  textSignIn: {
    color: '#e8505b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
