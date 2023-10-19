import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegistration } from "../actions";
import { useSelector } from "react-redux";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  console.log("user.users", users);

  const registerUser = () => {
    if (
      email !== "" &&
      userName !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      dispatch(userRegistration(email, userName, password));
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
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="button" value="Register" onClick={registerUser}>
        Register
      </button>
      <div style={{ background: "red", height: "20vh" }}>
        {users && users.map((item) => <div>item.name</div>)}
      </div>
    </div>
  );
}

export default Register;
