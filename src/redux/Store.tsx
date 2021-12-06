import { createStore, combineReducers, applyMiddleware } from 'redux';
import menuListReducer from "./menu/MenuListReducer";
import bannerReducer from "./banner/BannerReducer";
import commonrReducer from "./common/commonrReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    menu: menuListReducer,
    banner: bannerReducer,
    common : commonrReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

//export type RootState = ReturnType<typeof store.getState>

export default store;