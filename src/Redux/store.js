import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authenticationReducer } from './Reducer/AuthenticationReducer';
import { userReducer, isLoading } from './Reducer/UserReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import rootReducer from './reducers'; // the value from combineReducers


const reducers = {
    authenticationReducer,
    userReducer,
    isLoading
};

const persistConfig = {
    key: 'root',
    storage,
    // stateReconciler: autoMergeLevel2,
    // whitelist : ['reducers']
}

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
  };

export const configureStore = () =>
    createStore(
        // rootReducer,
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );  