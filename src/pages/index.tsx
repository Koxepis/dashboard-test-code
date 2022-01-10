import React from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/admin");
  }, 1200);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>this is a landing page</p>
    </div>
  );
};

export default LandingPage;
