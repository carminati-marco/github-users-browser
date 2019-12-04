import { combineReducers } from "redux";
import selectedUser from "./user";
import selectedRepositories from "./repository";

export default combineReducers({ selectedUser, selectedRepositories });
