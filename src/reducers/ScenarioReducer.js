import { GET_SCENARIOS, GET_SCENARIO } from "../actions/types";

const initialState = {
  scenarios: [],
  scenario: {},
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
    default:
      return state;
  }
}
