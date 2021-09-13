import {http} from '../../helpers/http';
// @ts-ignore
import {API_URL} from 'react-native-dotenv';

// const API_URL = 'https://simple-auth-type.herokuapp.com';

export const authLogin = (email: string, password: string) => {
  return async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    const form = new URLSearchParams();
    form.append('email', email);
    form.append('password', password);
    try {
      console.log(API_URL);
      const {data} = await http().post(`${API_URL}/auth/login`, form);
      console.log(data);
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.data.token,
      });
      console.log(API_URL);
    } catch (err: any) {
      console.log(err);
      console.log(API_URL);
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
      });
      console.log(API_URL);
    }
    setTimeout(() => {
      dispatch({type: 'AUTH_RESET'});
    }, 3000);
  };
};

export const authRegister = (name: string, email: string, password: string) => {
  return async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    const form = new URLSearchParams();
    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    console.log(API_URL);
    try {
      const {data} = await http().post(`${API_URL}/auth/register`, form);
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message,
      });
      console.log(API_URL);
    } catch (err: any) {
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: err.response.data.message,
      });
      console.log(API_URL);
    }
    setTimeout(() => {
      dispatch({type: 'AUTH_RESET'});
    }, 3000);
  };
};

export const authForgot = (email: string) => {
  return async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    const form3 = new URLSearchParams();
    form3.append('email', email);
    console.log(API_URL);
    try {
      const {data} = await http().post(`${API_URL}/auth/forgot-code`, form3);
      dispatch({
        type: 'AUTH_FORGOT',
        payload: data.message,
      });
      console.log(API_URL);
    } catch (err: any) {
      dispatch({
        type: 'AUTH_FORGOT_FAILED',
        payload: err.response.data.message,
      });
    }
    setTimeout(() => {
      dispatch({type: 'AUTH_RESET'});
    }, 3000);
  };
};

export const authForgotUpdate = (
  password: string,
  email: string,
  code: string,
) => {
  return async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    const form3 = new URLSearchParams();
    form3.append('password', password);
    form3.append('email', email);
    console.log(API_URL);
    try {
      const {data} = await http().patch(
        `${API_URL}/auth/forgot-update/${code}`,
        form3,
      );
      dispatch({
        type: 'AUTH_FORGOT_UPDATE',
        payload: data.message,
      });
      console.log(API_URL);
    } catch (err: any) {
      dispatch({
        type: 'AUTH_FORGOT_UPDATE_FAILED',
        payload: err.response.data.message,
      });
      console.log(API_URL);
    }
    setTimeout(() => {
      dispatch({type: 'AUTH_RESET'});
    }, 3000);
  };
};

export const authLogout = () => ({
  type: 'AUTH_LOGOUT',
});
