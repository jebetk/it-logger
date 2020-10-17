import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer.js";

export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
