import { combineReducers } from "redux";

import template from "./template";
import balance from "./balance";
import dashboard from "./dashboard";
export default combineReducers({
  template,
  balance,
  dashboard,
});
