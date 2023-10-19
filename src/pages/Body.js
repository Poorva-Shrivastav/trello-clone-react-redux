import React from "react";
import List from "../component/List";
import { useSelector } from "react-redux";
import AddButton from "../component/AddButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import { useDispatch } from "react-redux";

function Body() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="droppable-id" direction="vertical" type="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <div key={list.id}>
                  <List
                    title={list.title}
                    cards={list.cards}
                    listId={list.id}
                    index={index}
                  />
                </div>
              ))}
              {provided.placeholder}
              <AddButton list={lists} />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Body;
