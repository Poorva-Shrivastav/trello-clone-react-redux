import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  lists: listReducer,
  user: userReducer,
});
