import axios from "axios";

export const getUsers = async search => {
  const res = await axios.get(`https://api.github.com/search/users?q=${search}`); // (2)

  if (res.status === 200) {
    return res.data.items;
  }
  throw new Error(res.status);
};

export const getRepositories = async login => {
  const res = await axios.get(`https://api.github.com/search/repositories?q=user:${login}`); // (2)
  if (res.status === 200) {
    return res.data.items;
  }
  throw new Error(res.status);
};
