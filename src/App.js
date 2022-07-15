import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Completed from "./components/Completed";
import Calendar from "./components/Calendar";
import NotFound from "./components/NotFound";
import RequireAuth from "./components/RequireAuth";
import Maintenance from "./components/Maintenance";

function App() {
  return (
    <div>
      <Navbar />
      <Maintenance />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/completed"
          element={
            <RequireAuth>
              <Completed />
            </RequireAuth>
          }
        />
        <Route
          path="/calendar"
          element={
            <RequireAuth>
              <Calendar />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddTask />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
