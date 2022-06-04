import axios from "axios";
import config from "../config.json";
import { useToast } from "vue-toastification";

const backendUrl = config.backend;
const toast = useToast({ timeout: 4000 });

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
  toast.info("Выходим из учетной записи", { timeout: 1000 });
  setTimeout(() => {
    localStorage.clear();
    window.location.href = window.location.href;
  }, 1000);
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
  return localStorage.getItem("token")
    ? axios
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
          return res.data;
        })
        .catch((e) => {
          console.error(e);
        })
    : null;
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
      res.data.status === 200
        ? toast.success("Слот забронирован! Страница будет перезагружена...")
        : toast.error(res.data.details);
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 5000);
    });
};

export const doClearSlot = (user, col, row) => {
  console.log("clearing slot for " + user.username);
  return axios
    .delete(backendUrl + `/board?col=${col}&row=${row}`, {
      "Content-type": "application/json",
    })
    .then((res) => {
      res.data.status === 200
        ? toast.success("Слот освобожден! Страница будет перезагружена...")
        : toast.error(res.data.details);
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 5000);
    });
};
