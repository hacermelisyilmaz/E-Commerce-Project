import {
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
} from "../actions/rolesActions";
import fetchStates from "../fetchStates";

const initialState = {
  roles: [],
  fetchState: fetchStates.NOT_FETCHED,
  error: null,
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        fetchState: fetchStates.FETCHING,
        error: null,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        fetchState: fetchStates.FETCHED,
        roles: action.payload,
        error: null,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        fetchState: fetchStates.FETCH_FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rolesReducer;
