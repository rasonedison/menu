import React, {useEffect, useState} from 'react';
import { useRouter } from "../util/GetRouter"
import { useDispatch,useSelector } from "react-redux";
import { getMenuListActionCreator } from "../redux/menu/MenuListReducer"
import { getBannerActionCreator } from "../redux/banner/BannerReducer"


//import {RootState} from "../redux/Store";

export const MenuList = () => {

    const { routerHistory } = useRouter();
    const menuList = useSelector((state:any) => state.menu.menuList);
    const banner = useSelector((state:any) => state.banner.home);
    const loading  = useSelector((state:any) => state.common.loading);
    const mystate = useSelector((state:any) => state);
    const dispatch = useDispatch();

   // const [ list, setList ] = useState<any>({data:[]});

    useEffect(()=>{

      dispatch(getMenuListActionCreator());

      dispatch(getBannerActionCreator());

    },[]);

    useEffect(()=>{

     // console.log(loading);

    },[loading]);

  return (
    <div>
        <div>
            <a href={banner.url}><img src={banner.image} /></a>
        </div>
        {
          console.log(loading)
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
