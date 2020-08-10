import { GET_STEP, GET_STEPS, CREATE_STEP } from "../actions/types";

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
    case CREATE_STEP:
      return {
        ...state,
        steps: action.payload,
      };
    default:
      return state;
  }
}
