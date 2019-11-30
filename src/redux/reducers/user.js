import { SET_USER } from "../actionTypes";

const selectedUser = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload.user;
    }
    default: {
      return state;
    }
  }
};

export default selectedUser;
