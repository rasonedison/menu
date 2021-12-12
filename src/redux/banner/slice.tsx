import { createSlice, PayloadAction, createAsyncThunk, createDraftSafeSelector } from "@reduxjs/toolkit";
// import { fetchStartActionCreator,fetchEndActionCreator,fetchLangActionCreator,fetchUserActionCreator } from "../common/commonrReducer"
import axios from "axios";
import { useDispatch } from "react-redux";
import {_axiosWithLoading_} from "../../util/Async"


interface bannerStateInterface {
//   loading: boolean;
  error: string | null;
  data: any;
}

const initialState : bannerStateInterface= {
  //loading: true,
  error: null,
  data: null,
};

export const getBannerAction = createAsyncThunk(
  "banner/getBanner",
  async (args, thunkAPI) => {
   // const data = _axiosWithLoading_(thunkAPI,"http://localhost:8080/test",[fetchLangActionCreator],[fetchUserActionCreator]);
    const data = _axiosWithLoading_(thunkAPI,"http://localhost:8080/test");

    return data;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    
  },
//   extraReducers: (builder) => {
//     builder.addCase(getBannerAction.pending, (state, action,...rest) => {
//     }).addCase(getBannerAction.fulfilled, (state, action) => {
//         state.data = action.payload;
//         console.log("fetch success banner!!");

//       }).addCase(getBannerAction.rejected, (state, action) => {
//       })
//   },
  extraReducers: {
    [getBannerAction.pending.type]: (state) => {
        console.log("fetch start banner");
    },
    [getBannerAction.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      console.log("fetch success banner");
      state.error = null;
    },
    [getBannerAction.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //state.loading = false;
      console.log("fetch failed banner");
      state.error = action.payload;
    },
  }
});
