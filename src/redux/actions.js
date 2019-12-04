import { SET_USER, SET_REPOSITORIES } from "./actionTypes";

export const setUser = user => ({ type: SET_USER, payload: { user } });

export const setRepositories = repositories => ({ type: SET_REPOSITORIES, payload: { repositories } });
