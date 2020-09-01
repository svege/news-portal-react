import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from './actionTypes';
import { fetchNewsApi } from '../../api';

export const fetchNews = () => (dispatch) => {
    dispatch({ type: FETCH_NEWS_START });
    fetchNewsApi()
        .then(({ data }) => {
            if (data.status === 'err') {
                dispatch({
                    type: FETCH_NEWS_FAILURE,
                    payload: data.message,
                });
                return;
            }
            dispatch({
                type: FETCH_NEWS_SUCCESS,
                payload: data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: FETCH_NEWS_FAILURE,
                payload: err.message,
            });
        });
};
