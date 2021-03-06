import {
  getUsers as getUsersLocal,
  getRepositories as getRepositoriesLocal
} from "./local/localData";
import {
  getUsers as getUsersOnline,
  getRepositories as getRepositoriesOnline
} from "./api";

export const getUsers = async search => {
  try {
    const res = await getUsersOnline(search);
    return res;
  } catch (error) {
    return getUsersLocal(search);
  }
};

export const getRepositories = async login => {
  try {
    const res = await getRepositoriesOnline(login);
    return res;
  } catch (error) {
    return getRepositoriesLocal(login);
  }
};
