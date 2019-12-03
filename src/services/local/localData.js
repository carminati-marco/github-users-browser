import _ from "lodash";
import usersData from "../../data/users.json";
import repositoriesData from "../../data/repositories.json";

export const getUsers = search => {
  const users = usersData.items;
  return search ? users.filter(user => _.includes(user.login.toUpperCase(), search.toUpperCase())) : users;
};

export const getRepositories = login => {
  return repositoriesData.filter(repository => repository.owner.login === login);
};
