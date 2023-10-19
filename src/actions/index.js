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
