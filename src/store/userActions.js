import axios from "axios";
import config from "../config.json";

export const doUserLogin = (username, password) => {
  // axios
  //   .post(
  //     config.backend,
  //     `username=${username}&password=${password}&scope=&client_id=&client_secret=`,
  //     {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     res.data.token;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
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
