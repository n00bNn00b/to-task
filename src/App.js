import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
