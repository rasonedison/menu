
import { fetchStartActionCreator,fetchEndActionCreator } from "../common/commonrReducer"
import axios from "axios";

  const FETCH_BANNER_SUCCESS = "FETCH_BANNER_SUCCESS";
  const FETCH_BANNER_HOME = "home";

  const defaultState = {} // 不想再组建内使用 ? 那需要先初始化state

  const fetchBannerSuccessActionCreator = (data:any) =>{
    return {
      type: FETCH_BANNER_SUCCESS,
      payload:data 
    }
  }
   
  export default (state = defaultState, action:any) => {

    switch (action.type) {
      case FETCH_BANNER_SUCCESS:
        // console.log(FETCH_BANNER_SUCCESS);
        return { ...state, home: action.payload};
      default:
        return state;
    }
  };



  export const getBannerActionCreator = ()=> async (dispatch:any, getState:any) => {
   // dispatch(fetchStartActionCreator());
    try {
      const { data } = await axios.get(
        "http://localhost:8080/test"
      );
    //  dispatch(fetchBannerSuccessActionCreator(data));
      //dispatch(fetchEndActionCreator());
    } catch (error) {
      console.log("fetch banner error");
      //dispatch(fetchRecommendProductFailActionCreator(error.message));
    }
  };