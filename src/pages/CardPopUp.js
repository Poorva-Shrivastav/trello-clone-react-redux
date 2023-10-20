import React from "react";

function CardPopUp({ isOpen, setIsOpen, modalData }) {
  return (
    <div
      style={
        isOpen
          ? {
              background: "black",
              width: "70vw",
              height: "70vh",
              opacity: 0.9,
              zIndex: "2",
              marginTop: "10rem",
              position: "absolute",
            }
          : { display: "none" }
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          borderRadius: "8px",
          width: "30vw",
          marginLeft: "20rem",
          marginTop: "10rem",
          overflow: "hidden",
        }}
      >
        <h4>{modalData.value}</h4>
        <p>{modalData.assigned_user}</p>
        <p style={{ padding: "20px", textAlign: "left", color: "gray" }}>
          <span style={{ color: "black" }}>Description: </span>
          {modalData.description}
        </p>
      </div>
    </div>
  );
}

export default CardPopUp;
