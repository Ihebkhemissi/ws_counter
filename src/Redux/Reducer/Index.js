import { combineReducers } from "redux";
import counterReducer from "./Counter";
const rootReducer = combineReducers({ counterReducer });
export default rootReducer;
