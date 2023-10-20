import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

function List({ title, description, cards, listId, index }) {
  const navigate = useNavigate();

  const listData = { title: title, description: description, cards: cards };

  const navigationHandler = () => {
    navigate("/project", { state: listData });
  };

  return (
    <div onClick={navigationHandler} style={{ width: "20vw" }}>
      <Droppable droppableId={String(listId)}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ display: "flex", paddingLeft: "10px" }}>{title}</h3>
              <AddButton listId={listId} />
            </div>
            {cards.map((card, index) => (
              <div key={index}>
                <Card value={card.value} cardId={card.id} index={index} />
                {/* takes the actual index of the card from the map function */}
              </div>
            ))}
            {provided.placeholder}{" "}
            {/* when a card is moved, white space is created. To manage that whitespace, placeholder is used. */}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default List;
