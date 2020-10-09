import axios from "axios";
import { bindActionCreators } from "redux";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  console.log("Inside action");
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("CALLED*****");
      console.log(res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};
