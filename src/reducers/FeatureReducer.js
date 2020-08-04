import { GET_FEATURES, GET_FEATURE } from "../actions/types";

const initialState = {
  features: [],
  feature: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FEATURES:
      return {
        ...state,
        features: action.payload,
      };
    case GET_FEATURE:
      return {
        ...state,
        feature: action.payload,
      };
    default:
      return state;
  }
}
