import usersData from "../../data/users.json";
import repositoriesData from "../../data/repositories.json";

export const getUsers = () => {
  return usersData.items;
};

export const getRepositories = () => {
  return repositoriesData;
};
