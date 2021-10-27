/*The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important functions:

register(): POST {username, email, password}
login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage*/

import axios from "axios";

const API_URL = "http://localhost:49146/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
};
