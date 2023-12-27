import React from "react";
import LoginForm from "../forms/LoginForm";

const Login: React.FC = () => {
 
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-200 h-full">
        {/* Background image */}
      </div>

      <LoginForm/>
    </div>
  );
};

export default Login;
