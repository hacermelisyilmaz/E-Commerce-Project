import { applyMiddleware, legacy_createStore as createStore } from "redux";
import indexReducer from "../reducers/indexReducer";
import thunk from "redux-thunk";

export const store = createStore(indexReducer, applyMiddleware(thunk));
