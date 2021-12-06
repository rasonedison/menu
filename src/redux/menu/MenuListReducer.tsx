import { fetchStartActionCreator,fetchEndActionCreator } from "../common/commonrReducer"
import axios from "axios";

// import { RootState } from "../store";

  const FETCH_MENU_LIST_SUCCESS = "FETCH_MENU_LIST_SUCCESS";
  
  const defaultState:any = []
  
  export default (state = defaultState, action:any) => {
    switch (action.type) {
      case FETCH_MENU_LIST_SUCCESS:
        return { ...state, menuList: action.payload};
      default:
        return state;
    }
  };


  const fetchMenuListActionCreator = (data:any)=>{
    return {
      type: FETCH_MENU_LIST_SUCCESS,
      payload: data
    }
  }


  export const getMenuListActionCreator = ()=> async (dispatch:any, getState:any) => {
  dispatch(fetchStartActionCreator());
  try {
    const { data } = await axios.get(
      "http://localhost:5000/menu"
    );
    dispatch(fetchMenuListActionCreator(data));
  //  setTimeout(()=>{
      dispatch(fetchEndActionCreator());
   // },2000);
  } catch (error) {
    //dispatch(fetchRecommendProductFailActionCreator(error.message));
  }
};