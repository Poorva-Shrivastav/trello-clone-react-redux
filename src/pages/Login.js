import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../actions";
import { useSelector } from "react-redux";

function Login() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  console.log("user.users", users);

  const loginUser = () => {
    if (userName !== "" && password !== "") {
      dispatch(userLogin(userName, password));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" value="Register" onClick={loginUser}>
        Login
      </button>
      <div style={{ background: "red", height: "20vh" }}>
        {users && users.map((item) => <div>item.name</div>)}
      </div>
    </div>
  );
}

export default Login;
