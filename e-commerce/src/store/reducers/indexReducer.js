import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import globalReducer from "./globalReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import userReducer from "./userReducer";
import rolesReducer from "./rolesReducer";

const reducers = combineReducers({
  data: dataReducer,
  global: globalReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
  user: userReducer,
  roles: rolesReducer,
});

export default reducers;
