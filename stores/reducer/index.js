import { combineReducers } from "redux";

import template from "./template";
import balance from "./balance";
import dashboard from "./dashboard";
import dataTransfer from "./dataTransfer";
import user from "./user";
export default combineReducers({
  template,
  balance,
  dashboard,
  user,
  dataTransfer,
});
