import {combineReducers} from 'redux';
import auth from './auth.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
});

export default reducer;
