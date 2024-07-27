import React from "react";
import { getUserData, removeUserData } from "./Stroage";

const isAuthenticated = () => {
  return getUserData() != null ? true : false;
};

export default isAuthenticated;

export const logout = () => {
  removeUserData();
};
