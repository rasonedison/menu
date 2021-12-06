
// export interface LanguageState {
//     language: "en" | "zh";
//     languageList: { name: string; code: string }[];
//   }
import { fetchStartActionCreator,fetchEndActionCreator } from "../common/commonrReducer"
import axios from "axios";

  // interface BannerState {
  //   home:{
  //     id:number,
  //     name: string,
  //     url: string,
  //     images: string
  //   }

  // }

  // interface action {
  //     type: string,
  //     payload: any,
  //   }
  

  const FETCH_BANNER_SUCCESS = "FETCH_BANNER_SUCCESS";
  const FETCH_BANNER_HOME = "home";

  const defaultState = {
    home:{
      id:1,
      name: "string",
      url: "string",
      images: "string"
    } 
  }

  const fetchBannerSuccessActionCreator = (data:any) =>{
    return {
      type: FETCH_BANNER_SUCCESS,
      payload:data 
    }
  }
   
  export default (state = defaultState, action:any) => {
    // console.log("banner reducer:");
    // //console.log(state);
    // console.log(action.payload);

    switch (action.type) {
      case FETCH_BANNER_SUCCESS:
        // console.log(FETCH_BANNER_SUCCESS);
        return { ...state, home: action.payload};
      default:
        return state;
    }
  };



  export const getBannerActionCreator = ()=> async (dispatch:any, getState:any) => {
    dispatch(fetchStartActionCreator());
    try {
      const { data } = await axios.get(
        "http://localhost:8080/test"
      );
      dispatch(fetchBannerSuccessActionCreator(data));
      //dispatch(fetchEndActionCreator());
    } catch (error) {
      console.log("fetch banner error");
      //dispatch(fetchRecommendProductFailActionCreator(error.message));
    }
  };