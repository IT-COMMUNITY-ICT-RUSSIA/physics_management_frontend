import axios from "axios";
import config from "../config.json";

const backendUrl = config.backend;

export const doLoginServer = (username, password) => {
  return axios
    .post(
      config.backend + "/auth",
      { username: username, password: password },
      {
        "Content-type": "application/json",
      }
    )
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const doUserLogin = (username, password) => {
  if (password === "testing") {
    localStorage.setItem("username", username);
    localStorage.setItem("logged", true);
    return true;
  }
  return false;
};

export const doLogout = () => {
  localStorage.clear();
};

export const doFetchBoard = () => {
  axios
    .get(backendUrl + "/board")
    .then((res) => {
      console.log(res.data.board);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const doFetchMe = () => {
  console.log("token + " + localStorage.getItem("token"));
  axios
    .get(
      backendUrl + "/me",
      { params: {token: localStorage.getItem("token")} },
      {
        "Content-type": "application/json",
      }
    )
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log(res.data.user);
    })
    .catch((e) => {
      // localStorage.clear();
      console.error(e);
    });
};
