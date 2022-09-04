//api url 관리

const BASE_URL = 'http://10.0.2.2:8000';

export const API = {
    LOGIN: `${BASE_URL}/accounts/token/`,
    SIGNUP: `${BASE_URL}/accounts/signup/`,
    USER_DATA: `${BASE_URL}/accounts/user/`,
    USER_DATA_UPDATE: `${BASE_URL}/accounts/user/`,
    GET_PROFILEIMAGE: `${BASE_URL}`,
    ADD_FRIEND: `${BASE_URL}/accounts/follow/`,
    REMOVE_FRIEND: `${BASE_URL}/accounts/unfollow/`,
    FRIEND_LIST: `${BASE_URL}/accounts/suggestions/`,
};