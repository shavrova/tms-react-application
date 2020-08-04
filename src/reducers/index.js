import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ScenarioReducer from "./ScenarioReducer";

export default combineReducers({
  errors: errorReducer,
  scenario: ScenarioReducer,
});
