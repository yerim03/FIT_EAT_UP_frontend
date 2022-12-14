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

    GET_FRIEND_GOODLIST: `${BASE_URL}/accounts/place/friend/like/list/`,
    GET_FRIEND_VISITLIST: `${BASE_URL}/accounts/place/friend/visit/list/`,

    SAVE_GOODLIST: `${BASE_URL}/accounts/place/user/like/save/`,
    GET_GOODLIST: `${BASE_URL}/accounts/place/user/like/list/`,
    DELETE_GOODLIST: `${BASE_URL}/accounts/place/user/like/delete/`,
    
    SAVE_VISITLIST: `${BASE_URL}/accounts/place/user/visit/save/`,
    GET_VISITLIST: `${BASE_URL}/accounts/place/user/visit/list/`,
    DELETE_VISITLIST: `${BASE_URL}/accounts/place/user/visit/delete/`,

    SAVE_STAR_RATING: `${BASE_URL}/accounts/place/user/rating/`,
    GET_STAR_RATINGLIST: `${BASE_URL}/accounts/place/user/rating/list/`,

    GET_RESTAURANT_IMAGE: `${BASE_URL}/media/`,

    RECOMMEND_RESULTS: `${BASE_URL}/recommands/surprise/`,

    GET_RANDOM_RESTAURANT: `${BASE_URL}/recommands/random/`,
};

export const KAKAO_API = {
    LOCAL_API: `https://dapi.kakao.com/v2/local/search/keyword.json?`,
    IMAGE_API: `https://dapi.kakao.com/v2/search/image?`
}