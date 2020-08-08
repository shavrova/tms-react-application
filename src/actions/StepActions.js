import axios from "axios";
import { GET_STEP, GET_STEPS, GET_ERRORS } from "./types";

export const getSteps = () => async (dispatch) => {
  const res = await axios.get("/steps");
  dispatch({
    type: GET_STEPS,
    payload: res.data.content,
  });
};

export const getStep = (id, history) => async (dispatch) => {
  const res = await axios.get(`/steps/${id}`);
  dispatch({
    type: GET_STEP,
    payload: res.data,
  });
};

export const createStep = (step, history) => async (dispatch) => {
  try {
    const res = await axios.post("/steps", step);
    history.push("/steps");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
