import { CONSTANTS } from "../actions/constants";

const initialState = [
  {
    id: `listId-0`,
    title: "Harry",
    cards: [
      {
        id: `cardId-0`,
        value: "Testing1 testing testing",
      },
      {
        id: `cardId-1`,
        value: "Testing2 testing testing",
      },
    ],
  },
  {
    id: `listId-1`,
    title: "My little pony",
    cards: [
      {
        id: `cardId-2`,
        value: "Pony1 testing testing",
      },
      {
        id: `cardId-3`,
        value: "Pony2 testing testing",
      },
    ],
  },
];

let newId = 2;
let cardId = 5;

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        id: `listId-${newId}`,
        newId,
        title: action.payload,
        cards: [],
      };
      newId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        id: `cardId-${cardId}`,
        value: action.payload.userInput,
      };
      cardId += 1;

      const newState = state.map((list) => {
        //handling nested objects
        console.log(list);
        if (list.id === action.payload.cardId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      const copyOfState = [...state];

      //dragging list around
      if (type === "list") {
        const list = copyOfState.splice(droppableIndexStart, 1);
        copyOfState.splice(droppableIndexEnd, 0, ...list);
        return copyOfState;
      }

      //In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //moving card to other list
      if (droppableIdStart !== droppableIdEnd) {
        // list with the card now
        const listStart = state.find((list) => droppableIdStart === list.id);

        //move the card
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // list where the drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        //put card to the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return copyOfState;

    default:
      return state;
  }
};
