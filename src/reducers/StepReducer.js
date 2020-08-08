import { GET_STEP, GET_STEPS } from "../actions/types";

const initialState = {
  steps: [],
  step: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    case GET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
}
