import axios from 'axios';
import { API, NEWS_API, AUTH_API, USER_API } from './constants';

export const fetchNewsApi = () => {
    return axios({
        method: 'get',
        url: API + NEWS_API,
    });
};

export const authApi = (data) => {
    return axios({
        method: 'post',
        url: API + AUTH_API,
        headers: { 'content-type': 'application/json' },
        data: {
            email: data.username,
            password: data.password,
        },
    });
};

export const fetchUserInfoApi = (id) => {
    return axios({
        method: 'get',
        url: `${API + USER_API}/${id}`,
    });
};
