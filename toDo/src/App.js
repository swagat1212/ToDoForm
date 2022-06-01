import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import TodoTable from "./pages/TodoTable/index";
import TodoForm from "./pages/TodoForm/index";

import "./App.css";

function App() {
  return (
    <>
      <TodoForm />
      {/* <TodoTable /> */}
    </>
  );
}

export default App;
