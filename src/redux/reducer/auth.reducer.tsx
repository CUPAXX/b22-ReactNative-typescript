const initialState = {
  token: null,
  errMsg: '',
  succMsg: '',
  data: [],
};

const auth = (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
        errMsg: '',
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        succMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        errMsg: '',
        succMsg: '',
      };
    }
    case 'AUTH_RESET': {
      return {
        ...state,
        token: null,
        errMsg: '',
        sccMsg: '',
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
export default auth;
