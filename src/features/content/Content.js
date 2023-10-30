import React from "react";
import dinosaur from "../../assets/dinosaur.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, increment } from "./ContentSlice";

const Login = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex align-middle justify-center w-screen">
        <img src={dinosaur} alt="dinosaur" />
      </div>
      <span className="text-center text-2xl font-bold">{counter}</span>
      <br />
      <button
        className="rounded-full w-10 h-10 mx-auto mb-4 bg-slate-500 hover:bg-gray-200"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </>
  );
};

export default Login;
