import { client, removeAuthorizationHeader } from "../../api/client";
import type { typesLogIn } from "./types";
import { storage } from "../../../utils/storage";

export const logIn = async (credencials: typesLogIn) => {
  const response = await client.post("/api/auth/login", credencials);
  const { accessToken } = response.data;
  localStorage.setItem("authToken", accessToken);

  console.log(response);
};

export const logout = () => {
  storage.remove("authToken");
  removeAuthorizationHeader();
};
