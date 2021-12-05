
// export interface LanguageState {
//     language: "en" | "zh";
//     languageList: { name: string; code: string }[];
//   }

const BANNER = "BANNER";
  
  const defaultState:any = {
    homepage:
        {
          id:1,
          name: "aaa",
          url: "http://baidu.com",
          image: "https://img0.baidu.com/it/u=1736659654,3621498367&fm=26&fmt=auto"
      }
  }
   
  
  
  export default (state = defaultState, action:any) => {
    switch (action.type) {
      case BANNER:
        return { ...state};
      default:
        return state;
    }
  };