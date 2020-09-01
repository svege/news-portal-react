import {
    FETCH_USER_INFO_FAILURE,
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    LOGOUT,
} from '../actions/actionTypes';

const initialState = {
    profile: null,
    isLoading: false,
    errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_INFO_START:
            return { ...state, isLoading: true, errorMessage: '' };
        case FETCH_USER_INFO_SUCCESS: {
            const filteredItem = payload.social.find(
                (item) => item.label === 'web'
            );
            let changedArr = [...payload.social];

            if (filteredItem.label !== payload.social[0].label) {
                changedArr = [
                    ...payload.social.filter((item) => {
                        return item.label !== 'web';
                    }),
                ];
                changedArr.unshift(filteredItem);
            }

            return {
                ...state,
                profile: { ...payload, social: changedArr },
                isLoading: false,
                errorMessage: '',
            };
        }
        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                profile: null,
                isLoading: false,
                errorMessage: payload,
            };
        case LOGOUT:
            return {
                ...state,
                profile: null,
                isLoading: false,
                errorMessage: '',
            };
        default:
            return state;
    }
};
