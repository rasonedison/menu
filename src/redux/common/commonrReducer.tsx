export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_END = "FETCH_DATA_END";

interface CommonState {
  loading:boolean
}

const defaultState:CommonState = {
    loading: true
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
  
  export default (state = defaultState, action:any) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return { ...state, loading:true};
      case FETCH_DATA_END:
        return { ...state, loading:false};
      default:
        return state;
    }
  };