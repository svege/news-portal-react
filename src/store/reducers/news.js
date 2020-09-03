import {
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
} from '../actions/actionTypes';

export const initialState = {
    news: null,
    isLoading: false,
    errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_START:
            return { ...state, isLoading: true, errorMessage: null };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: payload,
                isLoading: false,
                errorMessage: null,
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                news: null,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }
};
