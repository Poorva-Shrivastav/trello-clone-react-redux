import React, { useEffect } from "react";
import List from "../component/List";
import { useSelector } from "react-redux";
import AddButton from "../component/AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Body() {
  const lists = useSelector((state) => state.lists);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); //log out not implememnted
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (!user) navigate("/");
  }, []);

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
      <div style={{ background: "#F8F8F9", height: "90vh", width: "100vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {lists &&
            lists.map((list, index) => (
              <div
                key={list.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "none",
                  width: "30vw",
                  margin: "10px",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                <div>
                  <List
                    title={list.title}
                    description={list.description}
                    cards={list.cards}
                    listId={list.id}
                    index={index}
                  />
                </div>
                <AddButton list={lists} />
              </div>
            ))}
        </div>
      </div>
    </DragDropContext>
  );
}

export default Body;
