import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('mywallet'));
    const config = {
        headers:{Authorization: `Bearer ${auth}`}
    }
    return config;
}

function sign_In(body){
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function sign_Up(body){
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function infos(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/user`, config);
    return promise;
}

export {sign_Up, sign_In, infos};