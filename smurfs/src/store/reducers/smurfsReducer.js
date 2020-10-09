import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
export default smurfsReducer;
