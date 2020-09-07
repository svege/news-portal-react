// import reducer, { initialState } from '../../store/reducers/news';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    LOGOUT,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from '../../store/actions/actionTypes';
import { API_ROOT, AUTH_API } from '../../api/constants';
import { auth, logout } from '../../store/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async auth actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates AUTH_SUCCESS when authentication has been done', () => {
        const responseSuccess = { data: { id: 1, status: 'ok' } };

        fetchMock.postOnce(API_ROOT + AUTH_API, {
            headers: { 'content-type': 'application/json' },
            body: responseSuccess,
        });

        const expectedActions = [
            {
                type: AUTH_START,
            },
            {
                type: AUTH_SUCCESS,
                payload: responseSuccess.data.id,
            },
        ];

        const user = { username: 'max@test.com', password: '12345' };

        const store = mockStore({});

        return store.dispatch(auth(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates AUTH_FAILURE when authentication has not been done', () => {
        const responseError = {
            status: 'err',
            message: 'wrong_email_or_password',
        };

        fetchMock.postOnce(API_ROOT + AUTH_API, {
            headers: { 'content-type': 'application/json' },
            body: responseError,
        });

        const expectedActions = [
            {
                type: AUTH_START,
            },
            {
                type: AUTH_FAILURE,
                payload: responseError.message,
                error: true,
            },
        ];

        const user = { username: 'smth', password: 'smth' };

        const store = mockStore({});

        return store.dispatch(auth(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

it('Function should create an action to set isAuthed', () => {
    const expectedAction = {
        type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
});
