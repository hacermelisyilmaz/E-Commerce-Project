import {
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
} from "../actions/rolesActions";

export const FETCH_STATES = {
  NOT_FETCHED: "not fetched",
  FETCHING: "fetching",
  FETCHED: "fetched",
  FETCH_FAILED: "failed",
};

const initialState = {
  roles: [],
  fetchState: FETCH_STATES.NOT_FETCHED,
  error: null,
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        fetchState: FETCH_STATES.FETCHING,
        error: null,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        fetchState: FETCH_STATES.FETCHED,
        roles: action.payload,
        error: null,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        fetchState: FETCH_STATES.FETCH_FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rolesReducer;
