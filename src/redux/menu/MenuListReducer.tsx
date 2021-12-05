
// export interface LanguageState {
//     language: "en" | "zh";
//     languageList: { name: string; code: string }[];
//   }

const ADD_MENU = "ADD_MENU";
  
  const defaultState:any = [
    {
        id:1,
        name: "cae",
        price:123,
        desc:"ttt"
    },
    {   
        id:2,
        name: "eee",
        price:456,
        desc:"dsfs"
        }
  ]
  
  export default (state = defaultState, action:any) => {
    switch (action.type) {
      case ADD_MENU:
        return { ...state};
      default:
        return state;
    }
  };