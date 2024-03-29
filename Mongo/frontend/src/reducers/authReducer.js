import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../actions/actionTypes";

const initState = {
  loggedIn: false,
  userData: {},
  authMessage: null,
};

export default function authReducer(state = initState, action) {
  console.log(action.type);
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        userData: action.payload.data?.userData || {},
        authMessage: action.payload.data?.message || null,
      };
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return {
        ...state,
        authMessage: action.error?.response?.data?.error || 'An error occurred',
      };
    case SIGNOUT:
      return {
        ...state,
        userData: {},
        loggedIn: false,
        authMessage: null,
      };
    default:
      return state;
  }
}
