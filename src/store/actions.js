import {
    SET_CURRENT_ARTICLE,
    UPDATE_LOGIN_STATE,
    UPDATE_LOGIN_VIEW,
    SET_NEW_ART_VIEW,
    LOAD_NEW_HOMEPAGE,
    LOAD_NEW_TAGS
} from "../data/constants";


export const updateLoginView = payload => ({
    type:UPDATE_LOGIN_VIEW,
    payload
})
export const updateLoginState = payload => ({
    type:UPDATE_LOGIN_STATE,
    payload
})
export const updateCurrentArticle = payload => ({
    type:SET_CURRENT_ARTICLE,
    payload
})
export const setNewArticleView = payload => ({
    type:SET_NEW_ART_VIEW,
    payload
})
export const loadNewDiaries = payload => ({
    type:LOAD_NEW_HOMEPAGE,
    payload
})
export const getAllTags = payload => ({
    type:LOAD_NEW_TAGS,
    payload
})