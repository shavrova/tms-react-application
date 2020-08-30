import axios from "axios";
import { GET_ERRORS } from "./types";

export const createNewUser = (newUser, history) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    await axios.post("http://localhost:8333/users-ws/api/register", newUser, {
      headers: headers,
    });
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
