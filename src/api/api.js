import axios from "axios";
import store from "../store";

const instance = axios.create({
    // withCredentials:true,
    baseURL: 'http://ajyal.neotech-s.com/api/v1/',
    headers: {
        "Accept": "application/json",
        'Access-Control-Allow-Origin' : '*',
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';

    const user = store.getters.user
    if (user) {
        request.headers.common['Authorization'] = `Bearer ${user.token}`
    }
    return request;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("user");
            // window.location.reload();
        }
        return Promise.reject(error);
    }
);

export default instance;