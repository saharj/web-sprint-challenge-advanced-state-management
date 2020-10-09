import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
};
// name: "",
//   age: null,
//   height: "",
//   id: null,

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload[0]],
      };
    default:
      return state;
  }
};
export default smurfsReducer;
