import axios from "axios";
import {
  GET_STEP,
  GET_STEPS,
  GET_ERRORS,
  CREATE_STEP,
  TESTS_WS_PATH,
} from "./types";

export const getSteps = () => async (dispatch) => {
  let res = [];
  try {
    res = await axios.get(TESTS_WS_PATH + "/tests-ws/steps");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
  dispatch({
    type: GET_STEPS,
    payload: res.data.content,
  });
};

export const getStep = (id, history) => async (dispatch) => {
  const res = await axios.get(TESTS_WS_PATH + `/tests-ws/steps/${id}`);
  dispatch({
    type: GET_STEP,
    payload: res.data,
  });
};

export const createStep = (step) => async (dispatch) => {
  try {
    await axios.post(TESTS_WS_PATH + "/tests-ws/steps", step);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
  const all = await axios.get(TESTS_WS_PATH + "/tests-ws/steps");
  dispatch({
    type: CREATE_STEP,
    payload: all.data.content,
  });
};
