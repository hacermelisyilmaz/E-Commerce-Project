import {
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SET_ROLE_ID,
} from "../actions/userActions.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  role_id: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_ROLE_ID:
      return {
        ...state,
        role_id: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
