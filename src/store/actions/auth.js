import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './actionTypes';
import { authApi } from '../../api';

export const auth = (user) => (dispatch) => {
    dispatch({ type: AUTH_START });
    authApi(user)
        .then((res) => {
            if (res.status !== 200) {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(({ data }) => {
            if (data.status === 'err') {
                dispatch({
                    type: AUTH_FAILURE,
                    payload: data.message,
                    error: true,
                });
                return;
            }
            dispatch({
                type: AUTH_SUCCESS,
                payload: data.data.id,
            });
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
