import {
  GET_ROLES_FAILURE,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
} from "../actions/rolesActions";

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        loading: true,
        roles: action.payload,
        error: null,
      };
    case GET_ROLES_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rolesReducer;
