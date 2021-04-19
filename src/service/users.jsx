import api from "./api";

function getCurrentUser() {
    return api.get(
        "auth/users/me"
    );
}

export {
    getCurrentUser
}