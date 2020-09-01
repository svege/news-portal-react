import {
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
} from './actionTypes';
import { fetchUserInfoApi } from '../../api';

export const fetchUserInfo = (id) => (dispatch) => {
    dispatch({ type: FETCH_USER_INFO_START });
    fetchUserInfoApi(id)
        .then(({ data }) => {
            if (data.status === 'err') {
                dispatch({
                    type: FETCH_USER_INFO_FAILURE,
                    payload: data.message,
                });

                return;
            }
            dispatch({
                type: FETCH_USER_INFO_SUCCESS,
                payload: data.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: FETCH_USER_INFO_FAILURE,
                error: err.message,
            })
        );
};
