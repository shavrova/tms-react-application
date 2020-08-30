import axios from "axios";
import { GET_FEATURES, GET_FEATURE, TESTS_WS_PATH } from "./types";

export const getFeatures = () => async (dispatch) => {
  const res = await axios.get(TESTS_WS_PATH + "/tests-ws/features");
  dispatch({
    type: GET_FEATURES,
    payload: res.data.content,
  });
};

export const getFeature = (id, history) => async (dispatch) => {
  const res = await axios.get(TESTS_WS_PATH + `/tests-ws/features/${id}`);
  dispatch({
    type: GET_FEATURE,
    payload: res.data,
  });
};
