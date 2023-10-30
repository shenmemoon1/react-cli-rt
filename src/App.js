import Content from "./features/content/Content";
import React from "react";

const App = () => {
  return (
    <div className="container-fluid mx-auto h-screen flex flex-col justify-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <h1 className="text-center text-6xl font-bold">Hello React</h1>
      <Content />
      <div className="flex justify-center">
        <a
          className=" w-3/4 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          href=""
        >
          Know More
        </a>
      </div>
    </div>
  );
};

export default App;
