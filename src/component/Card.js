import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ value, cardId, index }) {
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps} //use to control entire component movement, e.g. entire list
        >
          <div>{value}</div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
