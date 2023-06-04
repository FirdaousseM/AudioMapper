import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recordingsReducers from "./slice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from 'redux-thunk'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({ recordingsList: recordingsReducers })

const persistConfig = { key: "root", storage: AsyncStorage }
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: [thunk]
  }
)

export const persistor = persistStore(store);