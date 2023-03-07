import {
    LOGIN_STATE,
    LOGIN_VIEW,
    SET_CURRENT_ARTICLE,
    UPDATE_LOGIN_STATE,
    UPDATE_LOGIN_VIEW,
    SET_NEW_ART_VIEW,
    NEW_ART_VIEW,
    LOAD_NEW_HOMEPAGE,
    DATA_LOCAL,
    CATEGORIES,
    LOAD_NEW_TAGS
} from "../data/constants";

const initState = {
    login_view: window.localStorage.getItem(LOGIN_VIEW) ?? false,
    login_state: window.localStorage.getItem(LOGIN_STATE) ?? false,
    current_article: "",
    new_art_view: window.localStorage.getItem(NEW_ART_VIEW) ?? false,
    diaries_home: JSON.parse(window.localStorage.getItem(DATA_LOCAL)) ?? [],
    tags_list: JSON.parse(window.localStorage.getItem(CATEGORIES)) ?? []
}


function reducer(state, action) {
    switch (action.type) {
        case UPDATE_LOGIN_VIEW:
            return {
                ...state,
                login_view: action.payload
            }
        case UPDATE_LOGIN_STATE:
            return {
                ...state,
                login_state: action.payload
            }
        case SET_CURRENT_ARTICLE:
            return {
                ...state,
                current_article: action.payload
            }
        case SET_NEW_ART_VIEW:
            return {
                ...state,
                new_art_view: action.payload
            }
        case LOAD_NEW_HOMEPAGE:
            return {
                ...state,
                diaries_home: action.payload
            }
        case LOAD_NEW_TAGS:
            return {
                ...state,
                tags_list: action.payload
            }
        default:

            throw new Error('Wrong action')
    }

}

export { initState };
export default reducer;