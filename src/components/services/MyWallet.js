import axios from 'axios';

const BASE_URL = 'https://mywallet-api-tpwx.onrender.com';

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

function registerEntrys(body){
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/releases`, body, config);
    return promise;
}

function listEntrys(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/releases`, config);
    return promise;
}

function deleteReleases(body){
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/releases/${body}`, config);
    return promise;
}   

function findRegister(body){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/releases/${body}`, config);
    return promise;
}

function updateRegister(body){
    const config = createHeaders();
    const id = body.id;
    delete body.id;
    const promise = axios.put(`${BASE_URL}/releases/${id}`, body, config);
    return promise;
}

export {sign_Up, sign_In, infos, registerEntrys, listEntrys, deleteReleases, findRegister, updateRegister};