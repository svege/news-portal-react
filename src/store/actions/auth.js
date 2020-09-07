import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './actionTypes';
import { authApi } from '../../api';

export const auth = (user) => (dispatch) => {
    dispatch({ type: AUTH_START });
    return authApi(user)
        .then(({ data }) => {
            if (data.status === 'err') {
                dispatch({
                    type: AUTH_FAILURE,
                    payload: data.message,
                    error: true,
                });
            } else {
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: data.data.id,
                });
            }
        })
        .catch((err) =>
            dispatch({
                type: AUTH_FAILURE,
                payload: err.message,
                error: true,
            })
        );
};

export const logout = () => ({
    type: LOGOUT,
});
