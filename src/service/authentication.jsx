import api from './api'
import {getToken, removeToken, setToken} from "./token";


function login(username, password) {
    console.log(`service/authentication login ${username}`)
    return api
        .post(
            "/auth/token/login/",
            {
                "username": username,
                "password": password
            })
        .then(response => {
            const token = response.data.auth_token;
            setToken(token);
            return response.data;
        });
}

function logout() {
    removeToken();
}

function register(username, password) {
    return api.post(
        "/auth/users/",
        {
            username: username,
            password: password
        }
    );
}

function isLoggedIn() {
    return !!getToken();
}

export {
    login,
    logout,
    register,
    isLoggedIn,
}


