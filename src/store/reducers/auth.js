import {
    AUTH_FAILURE,
    AUTH_START,
    AUTH_SUCCESS,
    LOGOUT,
} from '../actions/actionTypes';

export const initialState = {
    userId: null,
    isLoading: false,
    isAuthed: false,
    errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                userId: payload,
                isLoading: false,
                isAuthed: true,
                errorMessage: null,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                userId: null,
                isLoading: false,
                isAuthed: false,
                errorMessage: payload,
            };
        case LOGOUT:
            return {
                ...state,
                userId: null,
                isAuthed: false,
                errorMessage: null,
            };
        default:
            return state;
    }
};
