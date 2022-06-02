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
  return axios
    .get(backendUrl + "/board")
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      console.log(`Request failed with ${e}`);
    });
};

export const doFetchMe = () => {
  console.log("token + " + localStorage.getItem("token"));
  axios
    .get(
      backendUrl + "/me",
      { params: { token: localStorage.getItem("token") } },
      {
        "Content-type": "application/json",
      }
    )
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log(res.data.user);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const doBookSlot = (user, col, row) => {
  console.log("booking slot for " + user.username);
  return axios
    .post(
      backendUrl +
        `/board?col=${col}&row=${row}&token=${localStorage.getItem("token")}`,
      {
        "Content-type": "application/json",
      }
    )
    .then((res) => {
      res.data.status === "200"
        ? console.log("slot booked")
        : console.log("failed");
      window.location.href = window.location.href;
    });
};

export const doClearSlot = (user, col, row) => {
  console.log("clearing slot for " + user.username);
  return axios
    .delete(backendUrl + `/board?col=${col}&row=${row}`, {
      "Content-type": "application/json",
    })
    .then(() => {
      res.data.status === "200"
        ? console.log("slot cleared")
        : console.log("failed");
      window.location.href = window.location.href;
    });
};
