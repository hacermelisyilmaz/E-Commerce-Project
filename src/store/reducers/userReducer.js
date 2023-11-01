import {
  SET_USER_FAILURE,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
} from "../actions/userActions";
import fetchStates from "../fetchStates";

const initialState = {
  user: {},
  fetchState: fetchStates.NOT_FETCHED,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REQUEST:
      return {
        ...state,
        fetchState: fetchStates.FETCHING,
        error: null,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        fetchState: fetchStates.FETCHED,
        user: action.payload,
        error: null,
      };
    case SET_USER_FAILURE:
      return {
        ...state,
        fetchState: fetchStates.FETCH_FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
