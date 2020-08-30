import axios from "axios";
import {
  GET_ERRORS,
  GET_SCENARIOS,
  GET_SCENARIO,
  DELETE_SCENARIO,
  TESTS_WS_PATH,
} from "./types";

export const createScenario = (scenario, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      TESTS_WS_PATH + "/tests-ws/features/scenarios",
      scenario
    );
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getScenarios = () => async (dispatch) => {
  const res = await axios.get(TESTS_WS_PATH + "/tests-ws/features/scenarios");
  dispatch({
    type: GET_SCENARIOS,
    payload: res.data.content,
  });
};

export const getScenario = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      TESTS_WS_PATH + `/tests-ws/features/scenarios/${id}`
    );
    dispatch({
      type: GET_SCENARIO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const updateScenario = (scenario, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      TESTS_WS_PATH + "/tests-ws/features/scenarios",
      scenario
    );
    history.push("/dashboard");
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: {},
    // });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteScenario = (id) => async (dispatch) => {
  if (window.confirm("This action will delete scenario, proceed?")) {
    await axios.delete(TESTS_WS_PATH + `/tests-ws/features/scenarios/${id}`);
    dispatch({
      type: DELETE_SCENARIO,
      payload: id,
    });
  }
};
