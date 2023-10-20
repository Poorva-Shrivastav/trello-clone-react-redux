import React, { useEffect } from "react";
import Popup from "../component/Popup";
import { useLocation, useNavigate } from "react-router-dom";

function Project() {
  const { state } = useLocation();
  const { title, description, cards } = state;

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (!user) navigate("/");
  }, []);
  return (
    <div style={{ background: "#F8F8F9", height: "90vh", width: "100vw" }}>
      <h2>{title}</h2>
      <h5>{description}</h5>
      <Popup cards={cards} />
    </div>
  );
}

export default Project;
