import reducer, { initialState } from '../../store/reducers/profile';
import {
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
} from '../../store/actions/actionTypes';

describe('profile reducer', () => {
    it('FETCH_USER_INFO_START no error', () => {
        const action = {
            type: FETCH_USER_INFO_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            errorMessage: null,
        });
    });

    it('FETCH_USER_INFO_START after error', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            profile: null,
            isLoading: true,
            errorMessage: 'error',
        };

        const action = {
            type: FETCH_USER_INFO_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            errorMessage: null,
        });
    });

    it('FETCH_USER_INFO_SUCCESS', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            profile: null,
            isLoading: true,
            errorMessage: null,
        };

        const action = {
            type: FETCH_USER_INFO_SUCCESS,
            isLoading: true,
            payload: {
                id: 2,
                name: 'smth',
            },
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            profile: action.payload,
        });
    });

    it('FETCH_NEWS_FAILURE', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            profile: null,
            isLoading: true,
            errorMessage: null,
        };

        const action = {
            type: FETCH_USER_INFO_FAILURE,
            isLoading: false,
            payload: 'error',
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            errorMessage: action.payload,
        });
    });
});
