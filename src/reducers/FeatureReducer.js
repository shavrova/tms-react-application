import { GET_FEATURES, GET_FEATURE, DELETE_SCENARIO } from "../actions/types";

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
    // case DELETE_SCENARIO:
    //   return {
    //     ...state,
    //     features: state.features.forEach((feature) =>
    //       feature.scenarios.filter(
    //         (scenario) => scenario.scenarioId !== action.payload
    //       )
    //     ),
    //   };
    default:
      return state;
  }
}
