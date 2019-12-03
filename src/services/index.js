import { getUsers as getUsersLocal, getRepositories as getRepositoriesLocal } from "./local/localData";
import { getUsers as getUsersOnline } from "./api";

export const getUsers = async search => {
  try {
    let res = await getUsersOnline(search);
    return res;
  } catch (error) {
    return getUsersLocal(search);
  }
};

export const getRepositories = login => {
  // todo: integrate call to "getRepositoriesOnline"
  return getRepositoriesLocal(login);
};
