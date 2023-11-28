import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure
} from '../Actions/UserAction';

// Define initial state
const initialState = {
  users: [],
};


export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case 'FETCH_USERS_SUCCESS':
      return true;
    case 'FETCH_USERS_REQUEST':
      return true;
    case 'FETCH_USERS_FAILURE':
      return false;
    default:
      return state;
  }
};

// Define the user reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case 'FETCH_USERS_FAILURE':
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};