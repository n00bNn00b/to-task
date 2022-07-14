import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const Tasklist = ({ task }) => {
  const [clicked, setClicked] = useState(false);
  const [complete, setComplete] = useState(false);
  const [user] = useAuthState(auth);

  const email = user?.email;
  const { taskName, _id, status } = task;
  const viewHandler = () => {
    setClicked(!clicked);
  };
  const completeHandler = () => {
    const url = `http://localhost:5000/tasks/${email}/${_id}`;
    axios.delete(url, { data: taskName });
    toast.success(taskName + " has been set to completed!");
    setComplete(true);
    axios.post("http://localhost:5000/completed", {
      taskName,
      email,
      status: "Complete",
    });
  };
  return (
    <div>
      {!complete && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-2">
          <div className="card-body">
            <h2 className="card-title">
              <input
                type="radio"
                name="radio"
                className="radio radio-primary"
                onChange={viewHandler}
              />
              <span key={_id}>{taskName}</span>
            </h2>

            <p>
              <b>Status: </b>{" "}
              <span className="text-yellow-400 font-bold"> {status} </span>
            </p>
            {clicked && (
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={completeHandler}>
                  Mark as Complete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasklist;
