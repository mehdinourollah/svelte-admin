import { token } from "./store";

const BASE_URL = "https://api.laroza.dev";

export const login = async (username, password) => {
  return fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      // Authorization: "Bearer " + myToken,
    },
    redirect: "follow",
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  });
};

export const get_users = async (username, password) => {
  let token = localStorage.getItem("token");
  console.log({ token });
  return fetch(BASE_URL + "/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + token,
    },
    redirect: "follow",
  });
};
