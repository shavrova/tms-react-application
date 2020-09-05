import { GET_STEP, GET_STEPS, CREATE_STEP } from "../actions/types";

const initialState = {
  all: [],
  one: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STEPS:
      return {
        ...state,
        all: action.payload,
      };
    case GET_STEP:
      return {
        ...state,
        one: action.payload,
      };
    case CREATE_STEP:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
}
