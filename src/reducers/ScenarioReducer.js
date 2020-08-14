import { GET_SCENARIOS, GET_SCENARIO, DELETE_SCENARIO } from "../actions/types";

const initialState = {
  scenarios: [],
  scenario: {},
  scenarioSteps: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCENARIOS:
      return {
        ...state,
        scenarios: action.payload,
      };
    case GET_SCENARIO:
      return {
        ...state,
        scenario: action.payload,
      };
    // case DELETE_SCENARIO:
    //   return {
    //     ...state,

    //     scenarios: state.scenarios.filter(
    //       (scenario) => scenario.scenarioId !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
}
