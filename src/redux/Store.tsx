// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import menuListReducer from "./menu/MenuListReducer";
// import bannerReducer from "./banner/BannerReducer";
import {bannerSlice} from "./banner/slice"
import {menuSlice} from "./menu/slice"

import commonrReducer from "./common/commonrReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    menu: menuSlice.reducer,
    banner: bannerSlice.reducer,
    common : commonrReducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    devTools: true,
  });

//export type RootState = ReturnType<typeof store.getState>

export default store;