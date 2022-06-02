import { combineReducers } from "redux";

import template from "./template";
import balance from "./balance";
import dashboard from "./dashboard";
import dataTransfer from "./dataTransfer";
import user from "./user";
import userLogin from "./userLogin";
export default combineReducers({
  template,
  balance,
  dashboard,
  user,
  dataTransfer,
  userLogin,
});
