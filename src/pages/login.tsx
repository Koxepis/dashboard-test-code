import React from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is a login page</p>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="email" />
      <button onClick={()=> {navigate("/admin")}}>Login</button>
    </div>
  );
};

export default LoginPage;
