import { Api } from "../../services/api";

export function setUserLocalStorage(user){
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem("user");

    if(!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export async function  LoginRequest(email, password) {
    try {
        const request = await Api.post('usuario/login', {email: email, password: password});
        return request.data;
    } catch (error) {
        return null;
    }
}