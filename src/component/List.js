import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { Draggable, Droppable } from "react-beautiful-dnd";

function List({ title, cards, listId, index }) {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h3>{title}</h3>
                {cards.map((card, index) => (
                  <div key={index}>
                    <Card value={card.value} cardId={card.id} index={index} />
                    {/* takes the actual index of the card from the map function */}
                  </div>
                ))}
                <AddButton listId={listId} />
                {provided.placeholder}{" "}
                {/* when a card is moved, white space is created. To manage that whitespace, placeholder is used. */}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default List;
