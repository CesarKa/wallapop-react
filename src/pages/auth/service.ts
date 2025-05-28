import { client } from "../../api/client";
import type { typesLogIn } from "./types";


export const logIn = async (credencials: typesLogIn) => {
    const response = await client.post("/api/auth/login", credencials);
    const { accessToken } = response.data;
    localStorage.setItem('authToken' , accessToken);

    console.log(response);
};