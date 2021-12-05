import { createStore, combineReducers, applyMiddleware } from 'redux';
import menuListReducer from "./menu/MenuListReducer";
import bannerReducer from "./banner/BannerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    menu: menuListReducer,
    banner: bannerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

//export type RootState = ReturnType<typeof store.getState>

export default store;