import { SET_REPOSITORIES } from "../actionTypes";

const selectedRepositories = (state = null, action) => {
  switch (action.type) {
    case SET_REPOSITORIES: {
      return action.payload.repositories;
    }
    default: {
      return state;
    }
  }
};

export default selectedRepositories;
