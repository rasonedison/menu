export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_END = "FETCH_DATA_END";
export const FETCH_USER = "FETCH_USER";
export const FETCH_LANG = "FETCH_LANG";



interface CommonState {
  loading:boolean[],
  user:any,
  lang:string []
}

const defaultState:CommonState = {
    loading: [],
    user:null,
    lang: []
  }
   

export const fetchStartActionCreator = () => {
    return {
      type: FETCH_DATA_START,
    };
  };

export const fetchEndActionCreator = () => {
    return {
      type: FETCH_DATA_END,
    };
  };

// export const fetchUserActionCreator = () => {
//     return {
//       type:FETCH_USER ,
//       payload: {
//         name: "rason",
//         pw :"1234"
//       }
//     };
//   };


//   export const fetchLangActionCreator = () => {
//     return {
//       type:FETCH_LANG ,
//       payload: ["en","zh"]
//     };
//   };
  
  export default (state = defaultState, action:any) => {
    switch (action.type) {
      case FETCH_DATA_START:
        console.log("FETCH_DATA_START");
      //  console.log(state.loading.length);
        return { ...state, loading:[...state.loading,true]};
      case FETCH_DATA_END:
        const [first, ...rest] =  state.loading;
        console.log("FETCH_DATA_END");
      //  console.log([...rest].length);
        return { ...state, loading : [...rest ]};
      // case FETCH_USER:
      //     console.log("FETCH_USER");
      //     return { ...state, user:action.payload};
      // case FETCH_LANG:
      //       console.log("FETCH_LANG");
      //       return { ...state, lang:action.payload};
      default:
        return state;
    }
  };