import React from 'react';

import {
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
  } from "react-router-dom";


export const useRouter = ()=>{

    return{
        routerHistory : useHistory(),
        routerLocation : useLocation(),
        routerParms : useParams(),
        routerMatch : useRouteMatch()
    }
}
