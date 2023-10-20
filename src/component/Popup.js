import React, { useState } from "react";
import CardPopUp from "../pages/CardPopUp";

function Popup({ cards }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const popUpHandler = (card) => {
    setModalData(card);
    setIsOpen(true);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.map((card, id) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
              height: "40vh",
              margin: "10px",
              borderRadius: "8px",
              width: "20vw",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => popUpHandler(card)}
          >
            <h4>{card.value}</h4>
            <p>{card.assigned_user}</p>
            <p style={{ padding: "20px", textAlign: "left", color: "gray" }}>
              <span style={{ color: "black" }}>Description: </span>
              {card.description}
            </p>
          </div>
        ))}
        {isOpen && (
          <CardPopUp
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modalData={modalData}
          />
        )}
      </div>
    </>
  );
}

export default Popup;
