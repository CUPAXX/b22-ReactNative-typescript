import {http} from '../../helpers/http';

import API_URL from 'react-native-dotenv';

export const authLogin = (email: string, password: string) => {
  console.log('1');
  return async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    const form = new URLSearchParams();
    form.append('email', email);
    form.append('password', password);
    try {
      const {data} = await http().post(
        `${API_URL}/auth/login`,
        form.toString(),
      );
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.resultToken,
      });
    } catch (err: any) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
      });
      setTimeout(() => {
        dispatch({type: 'AUTH_RESET'});
      }, 3000);
    }
  };
};
