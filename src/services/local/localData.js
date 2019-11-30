import usersData from "../../data/users.json";
import repositoriesData from "../../data/repositories.json";

export const getUsers = () => {
  return usersData.items;
};

export const getRepositories = userId => {
  return repositoriesData.filter(repository => repository.owner.id === userId);
};
