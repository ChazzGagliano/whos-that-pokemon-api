import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.prevent.default();
    await axios.post("http://localhost:3030/user/signup",
      {
        username: userName,
        email: email,
    });
  };
};

export default Signup;
