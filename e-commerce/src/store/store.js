import { applyMiddleware, legacy_createStore as createStore } from "redux";
import indexReducer from "./reducers/indexReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(indexReducer, applyMiddleware(thunk, logger));
