import React, {useEffect, useState} from 'react';
import { useRouter } from "../util/GetRouter"
import { useDispatch,useSelector } from "react-redux";
// import { getMenuListActionCreator } from "../redux/menu/MenuListReducer"
// import { getBannerActionCreator } from "../redux/banner/BannerReducer"
import {getBannerAction} from  "../redux/banner/slice"
import {getMenuAction} from  "../redux/menu/slice"



//import {RootState} from "../redux/Store";

export const MenuList = () => {

    const { routerHistory } = useRouter();
    const menuList = useSelector((state:any) => state.menu.data);
    const banner = useSelector((state:any) => state.banner.data);
    const loading  = useSelector((state:any) => state.common.loading);
    const mystate = useSelector((state:any) => state);
    const dispatch = useDispatch();

   // const [ list, setList ] = useState<any>({data:[]});

    useEffect(()=>{

      dispatch(getMenuAction());

      dispatch(getBannerAction());

    },[]);

    // useEffect(()=>{
    //     console.log("mystate");
    //     console.log(mystate);
    // },[mystate]);

  return (
    <div>
        <div>
            <a href={banner?.url}><img src={banner?.image} /></a>
        </div>
        {
          //console.log(loading)
        }
        {
            loading === true ? <div>loading</div> :
            <ul>
            { menuList?.map((item:any, index:number) => (
                  <li key={item.id} style={{ marginBottom: "20px" }}>
                      <div onClick= {()=>{ routerHistory.push(`detail/${item.id}`) }} >
                        {item.name}
                      </div>
                      <br />
                      <div>
                          {item.price}
                      </div>
                      <div>
                          {item.desc}
                      </div>
                    </li>
                ))}
            </ul>   
           
        }
    </div>
  )
}
