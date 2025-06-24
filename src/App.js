import React, { useState } from "react";
import { TablePeople } from './components/table.js'
import { Login } from './components/login.js'


import "./App.css";

function App() {

  return (
    <div className="container mt-5">
      <Login/>
    </div>
  );
}

export default App;
