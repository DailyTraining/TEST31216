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
    deleteUserFailure,
    addNewUser,
    updateUserLocally,
    deleteUserLocally
} from '../Redux/Actions/UserAction';
    
import userDetails from "./sampleData";

// Thunk Actions
export const loadUsers = () => async (dispatch,getState) => {
        dispatch(fetchUsersRequest());
        try {
            const response = await fetch("https://localhost:44361/api/UserDetails/GetAll");
            const data = await response.json();
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
};

export const addUser = (user) => {
    return async (dispatch) => {
        dispatch(addUserRequest(user));
        try {
            const response = await fetch('https://localhost:44361/api/UserDetails/Post', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            dispatch(addNewUser(data));
            dispatch(addUserSuccess(data));
        } catch (error) {
            dispatch(addUserFailure(error.message));
        }
    };
};

export const updateUser = (user) => {
    return async (dispatch) => {
        dispatch(updateUserRequest(user));
        try {
            const response = await fetch(`https://localhost:44361/api/UserDetails/Put?id=${user.id}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            dispatch(updateUserLocally(data));
            dispatch(updateUserSuccess(data));
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };
};

export const deleteUser = (user) => {
    return async (dispatch) => {
        dispatch(deleteUserRequest(user.id));
        try {
            await fetch(`https://localhost:44361/api/UserDetails/Delete?id=${user.id}`, {
                method: 'DELETE'
            });
            dispatch(deleteUserLocally(user.id));
            dispatch(deleteUserSuccess(user.id));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };
};
