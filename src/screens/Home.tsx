import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {authLogout} from '../redux/actions/auth.actions';

export interface HomeProps {
  authLogout: any;
}

class HomeComponent extends React.Component<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.textWelcome}>Welcome Back</Text>
        <Text style={styles.textWelcome}>Admin</Text>
        <TouchableOpacity
          onPress={() => this.props.authLogout()}
          style={styles.parentBtn}>
          <Text style={styles.textBtn}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: {auth: any}) => ({
  auth: state.auth,
});

const mapDispatchToProps = {authLogout};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#37474f',
    paddingVertical: 10,
  },
  parentBtn: {
    backgroundColor: '#e8505b',
    paddingHorizontal: 120,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
