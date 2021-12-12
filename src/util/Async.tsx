
import axios from "axios";
import { fetchStartActionCreator,fetchEndActionCreator } from "../redux/common/commonrReducer"

export const _axiosWithLoading_ = async(thunkAPI:any,url:string,loading?:boolean,preActions?:any, nextActions?:any)=>{
    if(loading){
        thunkAPI.dispatch(fetchStartActionCreator());
    }
    preActions?.map((action:any)=>{
        thunkAPI.dispatch(action());
    });
    let result = null;
    await axios.get(
        url
        ).then(res=>{
            if(loading){
               thunkAPI.dispatch(fetchEndActionCreator());
            }
            nextActions?.map((action:any)=>{
                thunkAPI.dispatch(action());
            });
            result = res.data;
        });

     return result;  
}