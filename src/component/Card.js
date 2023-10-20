import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ value, cardId, index }) {
  return (
    <div>
      <Draggable draggableId={String(cardId)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} //use to control entire component movement, e.g. entire list
          >
            <div
              style={{
                background: "white",
                minHeight: "20vh",
                margin: "10px",
                borderRadius: "8px",
              }}
            >
              <h5 style={{ paddingTop: "20px" }}>{value}</h5>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default Card;
