import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../actions";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) navigate("/dashboard");
  }, []);

  const loginUser = () => {
    if (userName !== "" && password !== "") {
      dispatch(userLogin(userName, password));
      localStorage.setItem("name", userName);
      setUserName("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "20vw", padding: "10px", marginBottom: "10px" }}
      />

      <button
        type="button"
        value="Register"
        onClick={loginUser}
        style={{
          width: "24vw",
          padding: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          background: "purple",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
      >
        Login
      </button>
      <div style={{ background: "red", height: "20vh" }}>
        {users && users.map((item) => <div>item.name</div>)}
      </div>
      <p>
        Not able to login! Please
        <span style={{ color: "white" }}>
          <Link to={"/"}> Register</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
