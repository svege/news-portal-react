import reducer, { initialState } from '../../store/reducers/auth';
import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    LOGOUT,
} from '../../store/actions/actionTypes';

describe('profile reducer', () => {
    it('AUTH_START no error', () => {
        const action = {
            type: AUTH_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            errorMessage: null,
        });
    });

    it('AUTH_START after error', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            isAuthed: false,
            userId: null,
            isLoading: true,
            errorMessage: 'error',
        };

        const action = {
            type: AUTH_START,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthed: false,
            isLoading: true,
            errorMessage: null,
        });
    });

    it('AUTH_SUCCESS', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            isAuthed: true,
            userId: null,
            isLoading: true,
            errorMessage: null,
        };

        const action = {
            type: AUTH_SUCCESS,
            isLoading: true,
            payload: '123',
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthed: true,
            isLoading: false,
            userId: action.payload,
        });
    });

    it('FETCH_NEWS_FAILURE', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            isAuthed: false,
            userId: null,
            isLoading: true,
            errorMessage: null,
        };

        const action = {
            type: AUTH_FAILURE,
            isAuthed: false,
            isLoading: false,
            payload: 'error',
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            errorMessage: action.payload,
        });
    });

    it('LOGOUT', () => {
        // eslint-disable-next-line no-shadow
        const initialState = {
            isAuthed: true,
            userId: 'smth',
            isLoading: false,
            errorMessage: null,
        };

        const action = {
            type: LOGOUT,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthed: false,
            userId: null,
            errorMessage: null,
        });
    });
});
