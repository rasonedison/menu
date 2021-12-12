import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStartActionCreator,fetchEndActionCreator } from "../common/commonrReducer"
import axios from "axios";
import {_axiosWithLoading_} from "../../util/Async"


interface menuStateInterface {
//   loading: boolean;
  error: string | null;
  data: any;
}

const initialState : menuStateInterface= {
  //loading: true,
  error: null,
  data: null,
};

export const getMenuAction = createAsyncThunk(
  "menu/getMenu",
   (args, thunkAPI) => {
    const data = _axiosWithLoading_(thunkAPI,"http://localhost:5000/menu",true);
    return data;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getMenuAction.pending.type]: (state) => {
      //  console.log("fetch start menu");
      // return { ...state, loading: true };
      //state.loading = true;
    },
    [getMenuAction.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      //state.loading = false;
      console.log("fetch success menu");
     // console.log(state.data);
      state.error = null;
    },
    [getMenuAction.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //state.loading = false;
      console.log("fetch failed menu");
      state.error = action.payload;
    },
  }
});
