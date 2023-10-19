import { CONSTANTS } from "../actions/constants";

const initialState = {
  users: [],
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoggedIn: true,
      };

    case CONSTANTS.LOGIN_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
