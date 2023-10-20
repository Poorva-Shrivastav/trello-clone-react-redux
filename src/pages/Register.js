import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userRegistration } from "../actions";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) navigate("/dashboard");
  }, []);

  const registerUser = () => {
    if (userName !== "" && email !== "" && password !== "") {
      dispatch(userRegistration(userName, email, password));
      localStorage.setItem("name", userName);
      localStorage.setItem("emal", email);
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        height: "90vh",
      }}
    >
      <h1 style={{ color: "white", padding: "4px" }}>
        Trello makes it easier for teams to manage projects and tasks
      </h1>
      <p style={{ color: "white", padding: "4px" }}>
        Simple, flexible, and powerful. All it takes are boards, lists, and
        cards to get a clear view of who’s doing what and what needs to get
        done.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: "20vw", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "20vw", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "20vw", padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="button"
          value="Register"
          onClick={registerUser}
          style={{
            width: "24vw",
            padding: "10px",
            marginBottom: "10px",
            fontWeight: "bold",
            background: "#24C3F3",
            border: "none",
            cursor: "pointer",
          }}
        >
          REGISTER
        </button>
      </div>
      <p>
        Already registered! Please{" "}
        <span style={{ color: "white" }}>
          <Link to={"/login"}>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Register;
