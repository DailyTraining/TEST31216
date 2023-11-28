import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './../Actions/AuthenticationAction';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Reducer function
export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases for different actions
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};