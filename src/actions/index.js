import { CONSTANTS } from "./constants";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const addCard = (cardId, userInput) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { cardId, userInput },
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};

export const userRegistration = (userName, email, password) => {
  return {
    type: CONSTANTS.REGISTER_USER,
    payload: {
      id: new Date().getTime(),
      userName,
      email,
      password,
    },
  };
};

export const userLogin = (userName, password) => {
  return {
    type: CONSTANTS.LOGIN_USER,
    payload: userName,
    password,
  };
};
