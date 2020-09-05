import axios from "axios";
import { GET_STEP, GET_STEPS, GET_ERRORS, CREATE_STEP } from "./types";

export const getSteps = () => async (dispatch) => {
  console.log("inside  getSteps");
  const res = await axios.get("/tests-ws/steps");
  dispatch({
    type: GET_STEPS,
    payload: res.data.content,
  });
};

export const getStep = (id, history) => async (dispatch) => {
  const res = await axios.get(`/tests-ws/steps/${id}`);
  dispatch({
    type: GET_STEP,
    payload: res.data,
  });
};

export const createStep = (step) => async (dispatch) => {
  try {
    await axios.post("/tests-ws/steps", step);
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
  const all = await axios.get("/tests-ws/steps");
  dispatch({
    type: CREATE_STEP,
    payload: all.data.content,
  });
};
