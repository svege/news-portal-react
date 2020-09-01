import {
    AUTH_FAILURE,
    AUTH_START,
    AUTH_SUCCESS,
    LOGOUT,
} from '../actions/actionTypes';

const initialState = {
    userId: null,
    isLoading: false,
    isAuthed: false,
    errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        case AUTH_SUCCESS:
            return {
                userId: payload.id,
                isLoading: false,
                isAuthed: true,
                errorMessage: '',
            };
        case AUTH_FAILURE:
            return {
                userId: null,
                isLoading: false,
                isAuthed: false,
                errorMessage: payload,
            };
        case LOGOUT:
            return {
                userId: null,
                isAuthed: false,
                errorMessage: '',
            };
        default:
            return state;
    }
};
