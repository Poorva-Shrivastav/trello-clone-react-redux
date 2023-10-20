import { CONSTANTS } from "../actions/constants";

const initialState = [
  {
    id: `listId-0`,
    title: "Backlog",
    description: "Neque porro quisquam est qui dolorem.",
    img: ``,
    cards: [
      {
        id: `cardId-0`,
        value: "Performance Improvement",
        assigned_user: "User-1",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: `cardId-1`,
        value: "Implement new design",
        assigned_user: "User-2",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
  {
    id: `listId-1`,
    title: "Ready",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    img: ``,
    cards: [
      {
        id: `cardId-2`,
        value: "Design navigation changes",
        assigned_user: "User-3",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: `cardId-3`,
        value: "Design Prototype",
        assigned_user: "User-4",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        id: `cardId-4`,
        value: "Website design",
        assigned_user: "User-4",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },
  {
    id: `listId-2`,
    title: "In Progress",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    img: ``,
    cards: [
      {
        id: `cardId-5`,
        value: "Build Social sharing functionality",
        assigned_user: "User-3",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: `cardId-6`,
        value: "Redesign overview",
        assigned_user: "User-4",
      },
    ],
  },
  {
    id: `listId-3`,
    title: "Done",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    img: ``,
    cards: [
      {
        id: `cardId-7`,
        value: "Usability Testing",
        assigned_user: "User-3",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
      {
        id: `cardId-8`,
        value: "Introduce new navigation",
        assigned_user: "User-4",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
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
