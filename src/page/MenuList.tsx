import React, {useEffect, useState} from 'react';
import { useRouter } from "../util/GetRouter"
import { useDispatch,useSelector } from "react-redux";
//import {RootState} from "../redux/Store";

export const MenuList = () => {

    const { routerHistory } = useRouter();
    const menuList = useSelector((state:any) => state.menu);
    const banner = useSelector((state:any) => state.banner);
    const dispatch = useDispatch();


    const [ list, setList ] = useState<any>({data:[]});
    useEffect(()=>{
        //setList(tempList);
    },[]);

  return (
    <div>
        <div>
            <a href={banner.homepage.url}><img src={banner.homepage.image} /></a>
        </div>
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
    </div>
  )
}
