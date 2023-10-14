import { legacy_createStore as createStore } from "redux";
import indexReducer from "../reducers/indexReducer";

export const store = createStore(indexReducer);
