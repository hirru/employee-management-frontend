export const // BASE_URL = "https://vast-harbor-77188.herokuapp.com/api";

  BASE_URL = "http://localhost:5000/api";

export const ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
  HOME: "/home",
  PEOPLE: "/people",
};
export const ACTION_TYPE = {
  //auth
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  GETALL: "GETALL",
  LOGOUT_USER: "LOGOUT_USER",
  MATCHTOKEN: "MATCHTOKEN",
  POST_LIST: "POST_LIST",
  PEOPLE_LIST: "PEOPLE_LIST",
};
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signUp",
  ADD_EMPLOYEE: "/auth/addEmployee",
  GET_EMPLOYESS: "/auth/getAllEmployees",
  GET_EMPLOYEE: "/auth/getAllEmployee",

  UPDATE: "/auth/updateEmployee",
  DELETE: "/auth/deleteEmployee",

  MATCH_TOKEN: "/auth/matchToken",
};
