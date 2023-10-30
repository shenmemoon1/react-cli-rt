import React from "react";
import dinosaur from "../../assets/dinosaur.svg";

const Login = () => {
  return (
    <>
      <div className="flex align-middle justify-center w-screen">
        <img src={dinosaur} alt="dinosaur" />
      </div>
      <span className="text-center">22</span>
      <br />
      <button className="rounded-full w-10 h-10 mx-auto mb-4 bg-slate-500">
        +
      </button>
    </>
  );
};

export default Login;
