import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { addCard, addList } from "../actions";

function AddButton({ list, listId }) {
  //reusable component
  const [userInput, setUserInput] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (e) => setUserInput(e.target.value);

  const buttonOpacity = list ? 1 : 0.5;
  const buttonColour = list ? "white" : "gray";
  const formButtonTitle = list ? "Add list" : "Add card";

  const clickHandler = () => {
    setIsFormOpen(true);
  };

  const placeholder = list
    ? "Enter List Title..."
    : "Enter a title for this card ";

  const closeForm = () => {
    setIsFormOpen(false);
    setUserInput("");
  };

  const listSubmitHandler = () => {
    if (userInput !== "") {
      dispatch(addList(userInput));
      setIsFormOpen(false);
      setUserInput("");
    }
  };

  const cardSubmitHandler = () => {
    if (userInput !== "") {
      dispatch(addCard(listId, userInput));
      setIsFormOpen(false);
      setUserInput("");
    }
  };

  return (
    <div
      style={{
        color: buttonColour,
        opacity: buttonOpacity,
      }}
    >
      <FaPlus />
      {/* <button onClick={clickHandler}>{buttonText}</button> */}
      {isFormOpen ? (
        <>
          <TextareaAutosize
            autoFocus
            placeholder={placeholder}
            onBlur={closeForm}
            value={userInput}
            onChange={inputHandler}
            style={{
              resize: "none",
            }}
          />
          <button onMouseDown={list ? listSubmitHandler : cardSubmitHandler}>
            {formButtonTitle}
          </button>
          {/* onMouseDown - As onBlur would run as soon we move the cursor outside textarea and onclick would never work */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AddButton;
