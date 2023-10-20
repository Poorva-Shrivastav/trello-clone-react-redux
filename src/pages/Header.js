import React from "react";

function Header() {
  const user = localStorage.getItem("name");
  return (
    <div
      style={{
        background: "purple",
        height: "10vh",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ padding: "4px" }}>Header</h3>
      <div>
        <h5 style={{ padding: "4px" }}>{user}</h5>
      </div>
    </div>
  );
}

export default Header;
