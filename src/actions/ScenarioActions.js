import axios from "axios";
import { GET_ERRORS, GET_SCENARIOS, GET_SCENARIO } from "./types";

export const createScenario = (scenario, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8333/tests-ws/features/scenarios",
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
  const res = await axios.get(
    "http://localhost:8333/tests-ws/features/scenarios"
  );
  dispatch({
    type: GET_SCENARIOS,
    payload: res.data.content,
  });
};

export const getScenario = (id, history) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8333/tests-ws/features/scenarios/${id}`
  );
  dispatch({
    type: GET_SCENARIO,
    payload: res.data,
  });
};

export const updateScenario = (scenario, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:8333/tests-ws/features/scenarios",
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
