import { getUsers as getUsersLocal, getRepositories as getRepositoriesLocal } from "./local/localData";

export const getUsers = () => {
  return getUsersLocal();
};

export const getRepositories = userId => {
  return getRepositoriesLocal(userId);
};