import React from 'react';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forgot from './src/screens/Forgot';
import ForgotUpdate from './src/screens/ForgotUpdate';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

interface Props {
  auth: any;
}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.auth.token === null ? (
          <React.Fragment>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotUpdate"
              component={ForgotUpdate}
              options={{headerShown: false}}
            />
          </React.Fragment>
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: {auth: any}) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
