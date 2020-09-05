import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ScenarioReducer from "./ScenarioReducer";
import FeatureReducer from "./FeatureReducer";
import StepReducer from "./StepReducer";
import SecurityReducer from "./SecurityReducer";

export default combineReducers({
  errors: errorReducer,
  scenario: ScenarioReducer,
  feature: FeatureReducer,
  allSteps: StepReducer,
  security: SecurityReducer,
});
