
// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addNewUser = (users) => ({
  type: ADD_USER,
  payload: users
});

export const updateUserLocally = (users) => ({
  type: UPDATE_USER,
  payload: users
});

export const deleteUserLocally = (users) => ({
  type: REMOVE_USER,
  payload: users
});

// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
  });

export const addUserRequest = (user) => {
  return {
    type: ADD_USER_REQUEST,
    payload: user
  };
};

export const addUserSuccess = (user) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: user
  };
};

export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error
  };
};

export const updateUserRequest = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
};

export const deleteUserRequest = (userId) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: userId
  };
};

export const deleteUserSuccess = (userId) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  };
};