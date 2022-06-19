import axios from "axios";

let instance = axios.create({
    // withCredentials:true,
    baseURL: 'https://glacial-garden-81387.herokuapp.com/api/v1/',
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*',
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("user");
            // window.location.reload();
        }
        return Promise.reject(error);
    }
);

export default instance;