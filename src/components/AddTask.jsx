import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddTask = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  document.title = "To Task - Add Task";
  const taskHandler = (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    // console.log(taskName);
    const url = "https://to-task.herokuapp.com/tasks";
    if (taskName.length > 0) {
      axios
        .post(url, {
          email,
          taskName,
          status: "Not Complete",
        })
        .then((res) => {
          if (res.data.success === false) {
            toast.warning(taskName + " already has been added!");
          } else {
            toast.success(taskName + " has been added!");
          }
        });

      e.target.reset();
    } else {
      toast.warning("Please input a valid task!");
      //
    }
  };
  return (
    <div className="my-20">
      <form className="flex justify-center" onSubmit={taskHandler}>
        <input
          type="text"
          placeholder="i.e: Learning JavaScript"
          name="taskName"
          id="taskName"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input className="btn btn-primary mx-2" type="submit" value="Add" />
      </form>
      <Link to="/">
        {" "}
        <button className="btn btn-primary my-5 flex mx-auto">
          My Task List
        </button>{" "}
      </Link>
    </div>
  );
};

export default AddTask;
