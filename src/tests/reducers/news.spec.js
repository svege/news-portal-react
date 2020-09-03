import reducer, { initialState } from '../../store/reducers/news';
import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from '../../store/actions/actionTypes';

describe('news reducer', () => {
    it('FETCH_NEWS_START no error', () => {
        const action = {
            type: FETCH_NEWS_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            errorMessage: '',
        });
    });

    it('FETCH_NEWS_START after error', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            news: null,
            isLoading: true,
            errorMessage: 'error',
        };

        const action = {
            type: FETCH_NEWS_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            errorMessage: '',
        });
    });

    it('FETCH_NEWS_SUCCESS', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            data: null,
            isLoading: true,
            errorMessage: '',
        };

        const action = {
            type: FETCH_NEWS_SUCCESS,
            isLoading: true,
            payload: [1, 2, 3],
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            news: action.payload,
        });
    });

    it('FETCH_NEWS_FAILURE', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            news: null,
            isLoading: true,
            errorMessage: '',
        };

        const action = {
            type: FETCH_NEWS_FAILURE,
            isLoading: false,
            payload: 'error',
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            errorMessage: action.payload, // который мы кладем в data
        });
    });
});
