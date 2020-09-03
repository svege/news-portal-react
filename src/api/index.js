import axios from 'axios';
import { API_ROOT, NEWS_API, AUTH_API, USER_API } from './constants';

export const fetchNewsApi = () => {
    return axios({
        method: 'get',
        url: API_ROOT + NEWS_API,
    });
};

export const authApi = (user) => {
    return axios({
        method: 'post',
        url: API_ROOT + AUTH_API,
        headers: { 'content-type': 'application/json' },
        data: {
            email: user.username,
            password: user.password,
        },
    });
};

export const fetchUserInfoApi = (id) => {
    return axios({
        method: 'get',
        url: `${API_ROOT + USER_API}/${id}`,
    });
};
